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
                    <li class="breadcrumb-item active" aria-current="page">Customer Lists</li>
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
@if(Session::has('error'))
<div class="container-fluid">
    <div class="row">
        <div class="col-12 p-0">
            <div class="alert alert-danger">
                {{Session::get('error')}}
            </div>
        </div>
    </div>
</div>
@endif
<div class="card-box mb-30">
    <div class="pd-20">
        <h4 class="text-blue h4">Customer Lists</h4>
    </div>
    <div class="p-2">
        <table class="table table-bordered table-striped hover multiple-select-row data-table-export nowrap" id="customer">
            <thead>
                <tr>
                    <th class="table-plus datatable-nosort">Cust Name</th>
                    <th>Refer By</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>contact Number</th>
                    <th>Email</th>
                    <th>Create Date</th>
                    <th>Action</th>
                    <th>Logs</th>
                </tr>
            </thead>
            <tbody>
                @foreach($customers as $customer)
                <tr>
                    <td class="table-plus">{{$customer->LAST_NAME}} {{$customer->FIRST_NAME}} </td>
                    <td>{{$customer->REFER_BY}}</td>
                    <td>{{$customer->GENDER}}</td>
                    <td>{{$customer->DOB}}</td>
                    <td>{{$customer->CONTACT_NUMBER}}</td>
                    <td>{{$customer->EMAIL}}</td>
                    <td>{{$customer->CREATE_DATE}}</td>
                    <td>
                        <a class="mx-1" title="view" ​​ data-toggle="modal" data-target="#bd-example-modal-lg-{{$customer->ID}}" type="button"><img src="{{asset('asset/view.svg')}}" alt="" width="30"></a>
                        <a data-toggle="modal" data-target="#bd-example-modal-lg-update-{{$customer->ID}}" title="edit" type="button"><img src="{{asset('asset/edit.svg')}}" alt="" width="25"></a>
                        <a href="{{url('/customer/'.$customer->ID.'/delete')}}" title="remove" class="delete-confirm"><img src="{{asset('asset/delete.svg')}}" alt="" width="27"></a>
                    </td>
                    <td>
                        <a class="mx-1" data-toggle="modal" data-target="#bd-example-modal-lg-addlog-{{$customer->ID}}" type="button" title="Add Logs"><img src="{{asset('asset/add-file.svg')}}" alt="" width="30"></a>
                        <a href="{{url('/customer/'.$customer->ID.'/all_log')}}" title="Log History"><img src="{{asset('asset/search-file.svg')}}" alt="" width="25"></a>
                    </td>
                </tr>
                <!-- View Customer Modal -->
                <div class="modal fade bs-example-modal-lg" id="bd-example-modal-lg-{{$customer->ID}}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myLargeModalLabel">Customer Info</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Refer By</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" placeholder="Refer By" name="REFER_BY" value="{{$customer->REFER_BY}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">First Name</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" placeholder="First Name" name="FIRST_NAME" value="{{$customer->FIRST_NAME}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Last Name</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" placeholder="Last Name" name="LAST_NAME" value="{{$customer->LAST_NAME}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Gender</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" placeholder="Gender" name="GENDER" value="{{$customer->GENDER}}" required disabled>

                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">DateOfBirth</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="date" name="DOB" value="{{$customer->DOB}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Contact Number</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" placeholder="Contact Number" type="tel" name="CONTACT_NUMBER" value="{{$customer->CONTACT_NUMBER}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Email</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="email" name="EMAIL" placeholder="Email" value="{{$customer->EMAIL}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Estimate Income</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" name="ESTIMATE_INCOME" value="{{$customer->ESTIMATE_INCOME}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Province</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" name="PROVINCE" value="{{$customer->PROVINCE}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">District</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" name="DISTRICT" value="{{$customer->DISTRICT}}" required disabled>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Address</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" name="ADDRESS" value="{{$customer->ADDRESS}}" required disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End View Customer Modal -->
                <div class="modal fade bs-example-modal-lg" id="bd-example-modal-lg-update-{{$customer->ID}}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myLargeModalLabel">Customer Update</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <form action="{{url('/customer/'.$customer->ID.'/update')}}" method="POST">
                                    @csrf
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">Refer By</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="text" placeholder="Refer By" name="REFER_BY" value="{{$customer->REFER_BY}}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">First Name</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="text" placeholder="First Name" name="FIRST_NAME" value="{{$customer->FIRST_NAME}}" required>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">Last Name</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="text" placeholder="Last Name" name="LAST_NAME" value="{{$customer->LAST_NAME}}" required>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">Gender</label>
                                        <div class="col-sm-12 col-md-10">
                                            <select class="custom-select col-12" name="GENDER" required>
                                                <option value="">Choose...</option>
                                                <option {{$customer->GENDER == 'Female' ? 'selected' : ''}} value="Female">Female</option>
                                                <option {{$customer->GENDER == 'Male' ? 'selected' : ''}} value="Male">Male</option>
                                                <option {{$customer->GENDER == 'Company' ? 'selected' : ''}} value="Company">Company</option>
                                                <option {{$customer->GENDER == 'Other' ? 'selected' : ''}} value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">DateOfBirth</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="date" name="DOB" value="{{$customer->DOB}}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">Estimate Income</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="text" name="ESTIMATE_INCOME" value="{{$customer->ESTIMATE_INCOME}}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">Province</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="text" name="PROVINCE" value="{{$customer->PROVINCE}}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">District</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="text" name="DISTRICT" value="{{$customer->DISTRICT}}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">Address</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="text" name="ADDRESS" value="{{$customer->ADDRESS}}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">Contact Number</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" placeholder="Contact Number" type="tel" name="CONTACT_NUMBER" value="{{$customer->CONTACT_NUMBER}}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-2 col-form-label">Email</label>
                                        <div class="col-sm-12 col-md-10">
                                            <input class="form-control" type="email" name="EMAIL" value="{{$customer->EMAIL}}">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div class="col-sm-12 col-md-12 text-right">
                                            <input type="submit" value="Update" class="btn btn-primary">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- Edit Customer Modal -->

                <!-- End Edit Customer Modal -->

                <!-- add logs -->
                <div class="modal fade bs-example-modal-lg" id="bd-example-modal-lg-addlog-{{$customer->ID}}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myLargeModalLabel">Add Logs</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <form action="{{url('/customer/'.$customer->ID.'/add_log')}}" method="POST">
                                    @csrf
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-4 col-form-label">Log For Customer Name :</label>
                                        <div class="col-sm-12 col-md-8">
                                            <input class="form-control" type="text" value="{{$customer->LAST_NAME}} {{$customer->FIRST_NAME}}" required readonly>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-4 col-form-label">Products Recommendation</label>
                                        <div class="col-sm-12 col-md-8">
                                            <select class="custom-select col-12" name="PRODUCT_CODE" required>
                                                <option value="">Choose...</option>
                                                @foreach($products as $product)
                                                <option value="{{$product->PRODUCT_CODE}}" {{($product->PRODUCT_CODE == $customer->PRODUCT_CODE) ? 'selected' : ''}}>{{$product->PRODUCT_NAME}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-4 col-form-label">Premium</label>
                                        <div class="col-sm-12 col-md-8">
                                            <input class="form-control" type="text" placeholder="Premium" name="PREMIUM" required value="{{$customer->PREMIUM}}" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-4 col-form-label">Feedbacks</label>
                                        <div class="col-sm-12 col-md-8">
                                            <select class="custom-select col-12" name="CUST_FEEDBACK_CODE" required>
                                                <option value="">Choose...</option>
                                                @foreach($feedbacks as $feedback)
                                                <option value="{{$feedback->ID}}" {{($feedback->ID == $customer->CUST_FEEDBACK_CODE) ? 'selected' : ''}}>{{$feedback->NAME}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-4 col-form-label">Status</label>
                                        <div class="col-sm-12 col-md-8">
                                            <select class="custom-select col-12 status" name="STATUS" required>
                                                <option value="">Choose...</option>
                                                @foreach($statuses as $status)
                                                <option value="{{$status->ID}}" {{($status->ID == $customer->STATUS) ? 'selected' : ''}}>{{$status->STATUS_NAME}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row app_id">
                                        <label class="col-sm-12 col-md-4 col-form-label">Application ID :</label>
                                        <div class="col-sm-12 col-md-8">
                                            <input class="form-control" type="text" placeholder="AP00000000" name="APPLICATION_ID" value="{{$customer->APPLICATION_ID}}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-4 col-form-label">Next Step</label>
                                        <div class="col-sm-12 col-md-8">
                                            <textarea class="form-control" placeholder="Next Step" name="NEXT_STEP" required>{{$customer->NEXT_STEP}}</textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-4 col-form-label">Appointment Date</label>
                                        <div class="col-sm-12 col-md-8">
                                            <input type="date" class="form-control" value="{{$customer->APPOINTMENT_DATE}}" name="APPOINTMENT_DATE" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-md-4 col-form-label">Customer Reason</label>
                                        <div class="col-sm-12 col-md-8">
                                            <textarea class="form-control" placeholder="Customer reason" name="REASON" required>{{$customer->REASON}}</textarea>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div class="col-sm-12 col-md-12 text-right">
                                            <input type="submit" value="Add " class="btn btn-primary">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                @endforeach
            </tbody>
        </table>
    </div>
</div>

@endsection

@push('customer')
<script src="{{asset('src/plugins/sweetalert2/sweetalert2.min.js')}}"></script>
<script>
    $(document).ready(function() {
        var x = document.getElementsByClassName("status");
        // var app = document.getElementsByClassName("app_id");
        var app = $('.app_id');
        for (let i = 0; i < x.length; i++) {

            x[i].addEventListener('change', function() {
                if (this.value == 1) {
                    app.eq(i).show();

                } else {
                    app.eq(i).hide();
                }
            })
            if (x[i].value == 1) {
                app.eq(i).show();

            } else {
                app.eq(i).hide();
            }
        }

    });

    $("#customer").DataTable({
        "responsive": true,
        "lengthChange": true,
        "autoWidth": false,
        columnDefs: [{
                responsivePriority: 1,
                targets: 0
            },
            {
                responsivePriority: 2,
                targets: -1
            }, {
                responsivePriority: 3,
                targets: -2
            }
        ],
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
    });
    $('.delete-confirm').on('click', function(event) {
        event.preventDefault();
        const url = $(this).attr('href');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(0,46,110)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $(location).attr('href', url)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    });
</script>
@endpush