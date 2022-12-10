<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> Authorization </title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ admin_asset('/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- icheck bootstrap -->
    <link rel="stylesheet" href="{{ admin_asset('/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ admin_asset('/dist/css/adminlte.min.css') }}">
    <link rel="stylesheet" href="{{ admin_asset('/dist/css/intlTelInput.css') }}">
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ admin_asset('/plugins/select2/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ admin_asset('/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}">

    @stack('css')

</head>

<body class="hold-transition">

    @yield('content')

    <!-- jQuery -->
    <script src="{{ admin_asset('/plugins/jquery/jquery.min.js') }}"></script>

    <!-- Bootstrap 4 -->
    <script src="{{ admin_asset('/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <!-- AdminLTE App -->
    <script src="{{ admin_asset('/dist/js/adminlte.min.js') }}"></script>
    <script src="{{ admin_asset('/dist/js/intlTelInput.js') }}"></script>

    <!-- Select2 -->
    <script src="{{ admin_asset('/plugins/select2/js/select2.full.min.js') }}"></script>

    @stack('scripts')
</body>
</html>
