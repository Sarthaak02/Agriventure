import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error

df = pd.read_csv('NewCropPricePrediction_Dataset.csv')

df.rename(columns={'Modal Price (Rs./Quintal)': 'Modal Price'}, inplace=True)
data = df[['District Name', 'Market Name', 'Commodity', 'Modal Price', 'Price Date']]

data['Price Date'] = pd.to_datetime(data['Price Date'])
data['Year'] = data['Price Date'].dt.year
data['Month'] = data['Price Date'].dt.month
data['Day'] = data['Price Date'].dt.day

data.drop('Price Date', axis=1, inplace=True)

data = data[data['Year'] != 2022]
data = data[data['Year'] != 2021]

plt.figure(figsize=(12, 8))
sns.boxplot(x='Commodity', y='Modal Price', data=data)
plt.title('Boxplot of Modal Price vs Commodity')
plt.xticks(rotation=45)
plt.show()

def remove_outliers(group):
    Q1 = group['Modal Price'].quantile(0.25)
    Q3 = group['Modal Price'].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    return group[(group['Modal Price'] >= lower_bound) & (group['Modal Price'] <= upper_bound)]

cleaned_data = data.groupby('Commodity').apply(remove_outliers).reset_index(drop=True)

plt.figure(figsize=(12, 8))
sns.boxplot(x='Commodity', y='Modal Price', data=cleaned_data)
plt.title('Boxplot of Modal Price vs Commodity (Outliers Removed)')
plt.xticks(rotation=45)
plt.show()

data_encoded = pd.get_dummies(cleaned_data, columns=['District Name', 'Market Name', 'Commodity'])

X = data_encoded.drop('Modal Price', axis=1)
y = data_encoded['Modal Price']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

rf_model = RandomForestRegressor()
rf_model.fit(X_train, y_train)

y_pred_rf = rf_model.predict(X_test)

rmse_rf = np.sqrt(mean_squared_error(y_test, y_pred_rf))

plt.bar('Random Forest', rmse_rf, color='green')
plt.xlabel('Model')
plt.ylabel('Root Mean Squared Error (RMSE)')
plt.title('Root Mean Squared Error (RMSE) for Random Forest Model')
plt.show()

percentage_diff_rf = np.mean(np.abs((y_test - y_pred_rf) * 100 / y_test))

def predict_price(input_data):
    input_df = pd.DataFrame([input_data])
    input_encoded = pd.get_dummies(input_df, columns=['District Name', 'Market Name', 'Commodity'])
    input_features = input_encoded.reindex(columns=X.columns, fill_value=0)
    predicted_price = rf_model.predict(input_features)
    return predicted_price[0]
