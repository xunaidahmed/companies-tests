@extends( admin_layout('auth') )
@section('title', 'Login')
@section('content')

    <div class="login-box">


        <div class="card">
            <div class="card-body login-card-body">
                <h3 class="mt-4 mb-2 text-center">Authorization</h3><br>

                @include( admin_view('partials.simple-messages') )

                <form method="POST" action="{{ route(admin_route('login')) }}">
                    @csrf
                    <div class="input-group mb-3">
                        <label class="abs-float">Email address<span class="text-denger font-weight-bold">*</span></label>
                        <input type="text" class="form-control @error('email') is-invalid @enderror" name="email"  value="{{ old('email') }}" autofocus />
                        <div class="input-group-append">
                            <div class="input-group-text"><span class="fas fa-envelope"></span></div>
                        </div>
                        @error('email')
                            <span class="error invalid-feedback"><strong>{{ $message }}</strong></span>
                        @enderror
                    </div>

                    <div class="input-group mb-3">
                        <label class="abs-float">Password <span class="text-denger font-weight-bold">*</span></label>
                        <input type="password" class="form-control  @error('password') is-invalid @enderror"  name="password" autocomplete="current-password">
                        <div class="input-group-append">
                            <div class="input-group-text"><span class="fas fa-lock"></span></div>
                        </div>
                        @error('password')
                            <span class="error invalid-feedback"><strong>{{ $message }}</strong></span>
                        @enderror
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="icheck-primary">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label class="form-check-label" for="remember">{{ __('Remember Me') }}</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block">{{ __('Login') }}</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    </div>
@endsection
