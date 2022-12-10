<div class="row form-group">
    <div class="col-sm-6">
        <label class="cust-label">Firs Name <strong style="color:#c00">*</strong></label>
        <div class="input-group">
            <input type="text" name="first_name" value="{{ old('first_name') ?? $data->first_name ?? null }}" class="form-control form-control-sm @error('first_name') is-invalid @enderror" placeholder="First Name">
            @error('first_name')<span class="error invalid-feedback">{{ $message }}</span>@enderror
        </div>
    </div>
    <div class="col-sm-6">
        <label class="cust-label">Last Name <strong style="color:#c00">*</strong></label>
        <div class="input-group">
            <input type="text" name="last_name" value="{{ old('last_name') ?? $data->last_name ?? null }}" class="form-control form-control-sm @error('last_name') is-invalid @enderror" placeholder="Last Name">
            @error('last_name')<span class="error invalid-feedback">{{ $message }}</span>@enderror
        </div>
    </div>
</div>
<div class="row form-group">
    <div class="col-sm-6">
        <label class="cust-label">Email <strong style="color:#c00">*</strong></label>
        <div class="input-group">
            <input type="email" name="email" value="{{ old('email') ?? $data->email ?? null }}" class="form-control form-control-sm @error('email') is-invalid @enderror" placeholder="Email Address">
            @error('email')<span class="error invalid-feedback">{{ $message }}</span>@enderror
        </div>
    </div>
    <div class="col-sm-6">
        <label class="cust-label">Password @if(!isset($data) )<strong style="color:#c00">*</strong>@endif</label>
        <div class="input-group">
            <input type="password" name="password" class="form-control form-control-sm @error('password') is-invalid @enderror" placeholder="Password">
            <div class="input-group-append constPwdAction" style="cursor:pointer;">
                <span class="input-group-text"><i class="fa fa-eye"></i></span>
            </div>
            @error('password')<span class="error invalid-feedback">{{ $message }}</span>@enderror
        </div>
    </div>
</div>
<div class="row form-group">
    <div class="col-sm-6">
        <label class="cust-label">Phone <strong style="color:#c00">*</strong></label>
        <div class="input-group">
            <input type="text" name="phone" value="{{ old('phone') ?? $data->phone ?? null }}" class="form-control form-control-sm @error('phone') is-invalid @enderror" placeholder="Phone Number">
            @error('phone')<span class="error invalid-feedback">{{ $message }}</span>@enderror
        </div>
    </div>
    <div class="col-sm-6">
        <div class="form-group">
            @php $is_active = old('is_active', $data->is_active ?? 1); @endphp
            <label class="cust-label">Visibilty <strong style="color:#c00">*</strong></label>
            <div class="custom-control custom-switch">
                <input type="checkbox" name="is_active" {{ $is_active == 1 ? 'checked' : '' }} class="custom-control-input" id="isActive" value="1">
                <label class="custom-control-label" for="isActive">Active</label>
            </div>
        </div>
    </div>
</div>
