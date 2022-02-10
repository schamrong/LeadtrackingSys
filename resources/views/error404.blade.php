<!DOCTYPE html>
<html>

<head>
    <!-- Basic Page Info -->
    <meta charset="utf-8">
    <title>Error Page</title>
    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/core.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/icon-font.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/style.css')}}">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119386393-1"></script>
</head>

<body>
    <div class="error-page d-flex align-items-center flex-wrap justify-content-center pd-20">
        <div class="pd-10">
            <div class="error-page-wrap text-center">
                <h1>404</h1>
                <h3>Error: {{$message}}</h3>
                <p>Sorry, the page you’re looking for cannot be accessed.<br>Either check the URL</p>
                <div class="pt-20 mx-auto max-width-200">
                    <a href="{{url('/home')}}" class="btn btn-primary btn-block btn-lg">Back To Home</a>
                </div>
            </div>
        </div>
    </div>
</body>

</html>