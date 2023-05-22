# Weather App Project

[Production Site](http://autumn-kim-weather-app.com/)

Weather App is an application to check 7 days weather forecast via zipcode built using React

## Development Set Up

### Frontend

```plaintext
$ npm install
$ npm start
```

## Deploying for Production

### Frontend

```
$ npm run build
```

+ Go to [AWS Console](https://us-east-1.console.aws.amazon.com/console/home?).
+ Go to S3
  + Go to [autumn-kim-weather-app.com bucket](https://s3.console.aws.amazon.com/s3/buckets/autumn-kim-weather-app.com)
  + Upload the contents of `/build` into the bucket
+ Go to [AWS cloudfront distribution](https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=us-east-1#/distributions/E7JJ07NX2C4NO)
  + Create invalidation for `/*`

