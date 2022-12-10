@extends( admin_layout('master') )
@section('title', 'Employee')
@php $is_update = (isset($data) && $data); @endphp
@section('breadcrumbs')
    <div class="col-sm-6">
        <h1>Employee</h1>
    </div>
    <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="{{ route(admin_route('dashboard') )}}">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{ route(admin_route('employee.index')) }}">Lists</a></li>
            <li class="breadcrumb-item active">{{ !$is_update ? 'Add New' : 'Edit' }} Employee</li>
        </ol>
    </div>
@endsection

@section('content')
<div class="container-fluid">

    @php
    $action = route(admin_route('employee.store'));

    if ( $is_update ) {
        $action = route(admin_route('employee.update'), [$data->id]);
    }
    @endphp

    {{--  @if($errors->any())
       {{ dump($errors) }}
       {{ implode('', $errors->all('<div>:message</div>')) }}
   @endif
   --}}

    @include( admin_view('partials.simple-messages') )

    <form role="form" action="{{ $action }}" method="POST" enctype="multipart/form-data">
    @csrf @method( !$is_update ? 'POST' : 'PUT' )
        <div class="row">

            <div class="col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">{{ !$is_update ? 'Add New' : 'Edit' }} Employee</h3>
                    </div>
                    <div class="card-body">
                        @include( admin_view('employee.form.form-builder') )
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Additional Information</h3>
                    </div>
                    <div class="card-body">
                        @include( admin_view('employee.form.additional-details') )
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card card-primary">
                    <div class="card-footer">
                        <button type="submit" class="btn btn-success" name="formsubmit" value="index">Save & Exit</button>
                        <button type="button" onclick="javascript:window.location='{{ route(admin_route('employee.index')) }}'" class="btn btn-default">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    </form>

</div>
@endsection

