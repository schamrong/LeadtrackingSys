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
<div class="card-box mb-30">
    <div class="pd-20">
        <h4 class="text-blue h4">Customer Lists</h4>
    </div>
    <div class="p-2">
        <table class="table table-bordered table-striped hover multiple-select-row data-table-export nowrap" id="customer">
            <thead>
                <tr>
                    <th class="table-plus datatable-nosort">First_Name</th>
                    <th>Last_Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Create By</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                @foreach($customers as $customer)
                <tr>
                    <td class="table-plus">{{$customer->FIRST_NAME}}</td>
                    <td>{{$customer->LAST_NAME}}</td>
                    <td>{{$customer->GENDER}}</td>
                    <td>{{$customer->DOB}}</td>
                    <td>{{$customer->CONTACT_NUMBER}}</td>
                    <td>{{$customer->EMAIL}}</td>
                    <td>{{$customer->CREATE_BY}}</td>
                    <td>
                        <a class="mx-1" title="view" ​​ data-toggle="modal" data-target="#bd-example-modal-lg-{{$customer->ID}}" type="button"><img src="{{asset('asset/view.svg')}}" alt="" width="30"></a>
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
                              <!--   <div class="form-group row">
                                    <label class="col-sm-12 col-md-2 col-form-label">Relation Customer</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="text" name="RELATION_CUST" value="{{$customer->RELATION_CUST}}" required disabled>
                                    </div>
                                </div> -->
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
                @endforeach
            </tbody>
        </table>
        {{$customers->links()}}
    </div>
</div>

@endsection

@push('customer')
<script src="{{asset('src/plugins/sweetalert2/sweetalert2.min.js')}}"></script>
<script>
    $("#customer").DataTable({
        "responsive": true,
        "lengthChange": true,
        "autoWidth": false,
        "bPaginate": false,
        columnDefs: [{
                responsivePriority: 1,
                targets: 0
            },
            {
                responsivePriority: 2,
                targets: -1
            }
        ],"lengthMenu": [
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