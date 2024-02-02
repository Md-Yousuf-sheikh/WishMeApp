import React from 'react';
import CountryPicker, {Country} from 'react-native-country-picker-modal';

interface CountryPickerProps {
  handleChange: (country: Country) => (country: Country) => Country | undefined;
  values?: {country?: string; number?: string; cca2?: string};
  errors?: {number?: string};
}

const CountrySelectPicker: React.FC<CountryPickerProps> = ({
  handleChange,
  values,
}) => {
  return (
    <>
      <CountryPicker
        withFilter
        withFlag
        withCountryNameButton
        withAlphaFilter
        onSelect={(country: Country) => {
          handleChange(country);
        }}
        // countryCode={'BD'}
        // withModal
        containerButtonStyle={{
          backgroundColor: '#ffffffa4',
          height: 45,
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 8,
        }}
        filterPlaceholder={'Search'}
        modalProps={{animationType: 'slide'}}
        placeholder={values || 'Select country'}
        textStyle={{fontSize: 10}}
      />
    </>
  );
};

export default CountrySelectPicker;
