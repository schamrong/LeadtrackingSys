@extends('layouts.app')

@section('content')
<div class="page-header">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="title">
                <h4>User Lists</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">User Lists</li>
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
                    <th class="table-plus datatable-nosort">Agent Code</th>
                    <th>Full Name</th>
                    <th>Position</th>
                    <th>Manager</th>
                    <th>Telephone</th>
                    <th>Branch</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($users as $user)
                <tr>
                    <td class="table-plus">{{$user->agent_code}}</td>
                    <td>{{$user->EN_NAME}}</td>
                    <td>{{$user->POSITION}}</td>
                    <td>{{$user->MANAGER}}</td>
                    <td>{{$user->TELEPHONE}}</td>
                    <td>{{$user->BRANCH}}</td>
                    <td>
                        @if($user->status == 0)
                        <a href="{{url('/admin/user/'.$user->id.'/active')}}" class="btn btn-success">Active</a>
                        @elseif($user->status == 1)
                        <a href="{{url('/admin/user/'.$user->id.'/inactive')}}" class="btn btn-warning">Disable</a>
                        @endif
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
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
        columnDefs: [{
                responsivePriority: 1,
                targets: 0
            },
            {
                responsivePriority: 2,
                targets: [-2,-1]
            }
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