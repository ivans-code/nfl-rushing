import pandas as pd
import re


def get_cleaned_rushing(rushing):
    clean_rushing = rushing.copy()

    clean_rushing['LngIsTD'] = clean_rushing['Lng'].apply(lambda lng: 'T' in str(lng))
    clean_rushing['Lng'] = clean_rushing['Lng'].apply(str_to_float)
    clean_rushing['Yds'] = clean_rushing['Yds'].apply(str_to_float)
    clean_rushing.rename(columns={'Att/G': 'AttPG', 'Yds/G': 'YdsPG', 'FUM': 'Fum'}, inplace=True)

    return clean_rushing


def str_to_float(entry):
    numbers_and_decimals = re.sub('[^0-9.]', '', str(entry))
    return float(numbers_and_decimals)


if __name__ == '__main__':
    rushing = pd.read_json('rushing.json')
    cleaned_df = get_cleaned_rushing(rushing)
    cleaned_df.to_json('rushing_clean.json', orient='records')
    print('Done cleaning rushing.json')
    