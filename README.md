# PE05 – Cities with Countries and Currency

## Input

The application allows users to enter city names and their corresponding countries through the AddCity tab. Users can also enter country names and their currencies through the AddCountry tab. For testing, USA with Dollar and Korea with Won are used as sample entries.

## Process

The application is developed using React Native and React Navigation. The App component manages city and country information using React state. The `addCity()` and `addCountry()` functions add new entries to their respective arrays. The `react-native-uuid` package generates unique identifiers for each entry. The Cities and Countries components receive data through props and display the information using the JavaScript `map()` method. Bottom tab navigation provides access to all four screens: Cities, AddCity, AddCountry, and Countries. A stack navigator is used to navigate between the Cities list and City Details screens.

## Output

The application displays a list of saved cities with their countries and a list of countries with their respective currencies. Users can navigate between all four tabs and view the information entered during the current application session.
