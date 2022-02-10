@extends('layouts.app')

@section('content')
<div class="page-header">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="title">
                <h4>Customer Lists</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Create Customer</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
@if(Session::has('message'))
<div class="container-fluid">
    <div class="row">
        <div class="col-12 p-0">
            <div class="alert alert-success">
                {{Session::get('message')}}
            </div>
        </div>
    </div>
</div>

@endif
<div class="pd-20 card-box mb-30">
    <div class="clearfix">
        <div class="pull-left">
            <h4 class="text-blue h4">Create Customer</h4>
        </div>
    </div>
    <form action="{{url('/customer/create')}}" method="POST">
        @csrf
        <!-- <div class="form-group row"> -->
        <!-- <label class="col-sm-12 col-md-2 col-form-label">Agent Code</label> -->
        <!-- <div class="col-sm-12 col-md-10"> -->
        <input class="form-control" type="hidden" placeholder="Agent Code" name="AGENT_CODE" required maxlength="8" minlength="8" value="{{Auth::user()->agent_code}}">
        <!-- </div> -->
        <!-- </div> -->


        <div class="form-group row">
            <div class="col-md-6">
                <label>Refer By</label>
                <input class="form-control" type="text" placeholder="Refer By" name="REFER_BY" value="{{old('REFER_BY')}}">
            </div>
            <div class="col-sm-12 col-md-6">
                <label>Branch Name <span class="text-danger">*</span></label>
                <select class="custom-select col-12 select-2" name="BRANCH_CODE" required>
                    <option value="">Choose...</option>
                    @foreach($branches as $branch)
                    <option value="{{$branch->BRANCH_CODE}}" {{old('BRANCH_CODE') == $branch->BRANCH_CODE ? 'selected' : ''}}>{{$branch->BRANCH_NAME}}</option>
                    @endforeach
                </select>
            </div>


        </div>
        <div class="form-group row">
            <div class="col-md-6">
                <label>First Name <span class="text-danger">*</span></label>
                <input class="form-control" type="text" placeholder="First Name" name="FIRST_NAME" value="{{old('FIRST_NAME')}}" required>
            </div>
            <div class="col-md-6">
                <label>Last Name <span class="text-danger">*</span></label>
                <input class="form-control" type="text" placeholder="Last Name" name="LAST_NAME" value="{{old('LAST_NAME')}}" required>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-6">
                <label>Gender <span class="text-danger">*</span></label>
                <select class="custom-select" name="GENDER" required>
                    <option value="">Choose...</option>
                    <option value="Female" {{old('GENDER')=='Female' ? 'selected' : ''}}>Female</option>
                    <option value="Male" {{old('GENDER')=='Male' ? 'selected' : ''}}>Male</option>
                    <option value="Company" {{old('GENDER')=='Company' ? 'selected' : ''}}>Company</option>
                    <option value="Other" {{old('GENDER')=='Other' ? 'selected' : ''}}>Other</option>
                </select>
            </div>
            <div class="col-md-6">
                <label>DateOfBirth</label>
                <input class="form-control" type="date" name="DOB" value="{{old('DOB')}}">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-6">
                <label>Contact Number</label>
                <input class="form-control" placeholder="Contact Number" type="tel" name="CONTACT_NUMBER" value="{{old('CONTACT_NUMBER')}}">
            </div>
            <div class="col-md-6">
                <label>Email</label>
                <input class="form-control" type="text" name="EMAIL" placeholder="Email" value="{{old('EMAIL')}}">
            </div>
        </div>
        <div class="form-group row">
             <div class="col-md-6">
                <label>Estimate Income</label>
                <input class="form-control" type="text" name="ESTIMATE_INCOME" placeholder="Estimate Income" value="{{old('ESTIMATE_INCOME')}}">
            </div>
            <div class="col-md-6">
                <label>Customer Status</label>
                <select class="custom-select col-12" name="CUST_STATUS">
                    <option value="">Choose...</option>
                    <option value="single" {{old('CUST_STATUS') == 'single' ? 'selected':''}}>Single</option>
                    <option value="married" {{old('CUST_STATUS') == 'married' ? 'selected':''}}>Married</option>
                    <option value="widow" {{old('CUST_STATUS') == 'widow' ? 'selected':''}}>Widow</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-6">
                <label>Province</label>
                <select class="custom-select col-12" name="PROVINCE" id="province">
                    <option value="">--choose--</option>
                </select>
            </div>
            <div class="col-md-6">
                <label>District</label>
                <select class="custom-select col-12" name="DISTRICT" id="district">
                    <option value="">--choose--</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-12">
                <label>Address</label>
                <textarea class="form-control" name="ADDRESS" placeholder="Address">{{old('ADDRESS')}}</textarea>
            </div>
           
        </div>


        
        <div class="form-group row">
            <div class="col-sm-12 col-md-12 text-right">
                <input type="reset" value="Reset" class="btn btn-secondary">
                <input type="submit" value="Create" class="btn btn-primary">
            </div>
        </div>
    </form>
</div>
@endsection

@push('customer')
<script src="{{asset('js/script.js')}}"></script>
<script>
    $(document).ready(function() {
        for (let i = 0; i < provinces.length; i++) {
            if (!$("#province option[value='" + provinces[i] + "']").length) {
                var oldProvince = '';
                if ("{{old('PROVINCE')}}" == provinces[i]) {
                    oldProvince = 'selected';
                }
                $('#province').append(`<option value="${provinces[i]}" ${oldProvince}>
                                       ${provinces[i]} 
                                  </option>`);

            }
        }
        $(document).ready(function() {
            if ($('#province').val() != '') {
                $('#district').empty();
                $('<option>').val('').text('--choose--').appendTo($('#district'));
                for (let i = 0; i < district[$('#province').val()].length; i++) {
                    if (!$('#district option[value="' + district[$('#province').val()][i] + '"]').length) {
                        var oldDistrict = '';
                        if ("{{old('DISTRICT')}}" == district[$('#province').val()][i]) {
                            oldDistrict = 'selected';
                        }
                        $('#district').append(`<option value="${district[$('#province').val()][i]}" ${oldDistrict}>
                                       ${district[$('#province').val()][i]} 
                                  </option>`);
                        // $('<option>').val(district[$('#province').val()][i]).text(district[$('#province').val()][i]).appendTo($('#district'));
                    }
                }
            }

        });
        $('#province').change(function() {
            $('#district').empty();
            $('<option>').val('').text('--choose--').appendTo($('#district'));
            for (let i = 0; i < district[$(this).val()].length; i++) {
                console.log(district[$(this).val()][i]);

                if (!$('#district option[value="' + district[$(this).val()][i] + '"]').length) {
                    $('<option>').val(district[$(this).val()][i]).text(district[$(this).val()][i]).appendTo($('#district'));
                }
            }

        });
    });
</script>
<script>
    $(document).ready(function() {
    $('.select-2').select2();
});
</script>
@endpush