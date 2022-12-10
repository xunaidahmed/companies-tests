<div class="row form-group">
    <div class="col-sm-12">
        <label class="cust-label">Address <strong style="color:#c00">*</strong></label>
        <textarea maxlength="260" name="address" class="form-control @error('address') is-invalid @enderror" placeholder="Address">{{ old('address') ?? $data->detail->address ?? null }}</textarea>
        @error('address')<span class="error invalid-feedback">{{ $message }}</span>@enderror
    </div>
</div>
