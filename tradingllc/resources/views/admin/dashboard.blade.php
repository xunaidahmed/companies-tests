@extends( admin_layout('master') )
@section('title', 'Admin Dashboard')
@section('breadcrumbs')
    <div class="col-sm-6">
        <h1>Admin Dashboard</h1>
    </div>
    <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item active">Dashboard</li>
        </ol>
    </div>
@endsection
@section('content')
<div class="container-fluid">

    @include( admin_view('partials.simple-messages') )

    <div class="row">
        <div class="col-lg-3 col-6">
            <div class="small-box bg-info">
                <div class="inner">
                    <h3>0</h3>
                    <p>Employees</p>
                </div>
                <div class="icon"><i class="fas fa-users"></i></div>
                <a href="" class="small-box-footer">More <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>

    </div>

</div>
@stop
