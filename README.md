# Adding Cache-control parameter to existing s3 Assets

### Scenario
S3 assets were uploaded to S3 without setting cache-control parameters.
Consequently, browers were not able to cache the assets affecting page ranking and site speed.

Solution: To modify/add cache-control parameters to existing s3 assets.

### Dependencies
[AWS CLI](https://aws.amazon.com/cli/)

-----------
### Run

```cli
node index.js -m 1800,public -b shopily -f uploads/banners/356/image.png

```

### Help

```cli
node index.js --help
```
