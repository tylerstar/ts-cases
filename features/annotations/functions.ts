const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// Only use never annotation 'never' while function never reach the end
// in this example, use string as return type even though it could throw an error
const throwErrorExample2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const todayWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logWeatherES2015 = ({ date, weather }: { date: Date, weather: string }) => {

};

logWeather(todayWeather);







