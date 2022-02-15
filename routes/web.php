<?php

use App\Models\TagentRegistor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('backend.login_form');
})->middleware('guest');

Route::group(['middleware' => 'prevent-back-history'], function () {
    Auth::routes();
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'dashboard']);

    Route::post('/login', [App\Http\Controllers\LoginController::class, 'login']);

    // customer 
    Route::get('/customer', [App\Http\Controllers\CustomerController::class, 'index']);
    Route::get('/create_customer', [App\Http\Controllers\CustomerController::class, 'create']);
    Route::post('/customer/create', [App\Http\Controllers\CustomerController::class, 'store']);
    Route::post('/customer/{ID}/update', [App\Http\Controllers\CustomerController::class, 'update']);
    Route::get('/customer/{ID}/delete', [App\Http\Controllers\CustomerController::class, 'destroy']);

    // logs
    Route::get('all/logs', [App\Http\Controllers\LogController::class, 'index']);
    Route::post('/customer/{ID}/add_log', [App\Http\Controllers\LogController::class, 'store']);
    Route::get('/customer/{ID}/all_log', [App\Http\Controllers\LogController::class, 'show']);

    // changepassword 
    Route::patch('/user/change_password/form',[App\Http\Controllers\AdminController::class,'userChangePassword']);
    // manager
    Route::group(['middleware' => 'checkposition'], function () {
        Route::get('/manager/agent', [App\Http\Controllers\ManagerController::class, 'yourAgent']);
        Route::get('/manager/agent/logs', [App\Http\Controllers\ManagerController::class, 'allAgentLogs']);

        Route::get('/manager/agent/customers', [App\Http\Controllers\ManagerController::class, 'yourAgentCustomer']);
        Route::get('/head/all_manager', [App\Http\Controllers\ManagerController::class, 'allYourManager']);
    });

    Route::group(['middleware' => 'checkpositionadmin'], function () {
        Route::get('/admin/all_customers', [App\Http\Controllers\AdminController::class, 'allCustomer']);
        Route::get('/admin/customer/{id}/active', [App\Http\Controllers\AdminController::class, 'customerActive']);
        Route::get('/admin/customer/{id}/inactive', [App\Http\Controllers\AdminController::class, 'customerDisable']);

        Route::get('/admin/user/{id}/active', [App\Http\Controllers\AdminController::class, 'userActive']);
        Route::get('/admin/user/{id}/inactive', [App\Http\Controllers\AdminController::class, 'userDisable']);

        Route::get('/admin/create_user', [App\Http\Controllers\AdminController::class, 'index']);
        Route::get('/admin/all_users', [App\Http\Controllers\AdminController::class, 'allUser']);
        Route::get('/admin/transfer_info', [App\Http\Controllers\AdminController::class, 'transferInfo']);
        Route::post('/admin/handle_transfer', [App\Http\Controllers\AdminController::class, 'handleTransfer']);

        Route::post('/admin/create/user_ia', [App\Http\Controllers\AdminController::class, 'createUserIA']);
        Route::post('/admin/create/user_manager', [App\Http\Controllers\AdminController::class, 'createUserManager']);
        Route::post('/admin/create/user_head', [App\Http\Controllers\AdminController::class, 'createUserHead']);


        Route::get('/admin/user/{id}/reset_password',[App\Http\Controllers\AdminController::class,'userResetPassword']);
        Route::post('/admin/user/reset/{id}/password',[App\Http\Controllers\AdminController::class,'performResetPassword']);
    });
    // error
    Route::get('/error404', [App\Http\Controllers\HomeController::class, 'errorHandler']);
    Route::get('/profile', [App\Http\Controllers\HomeController::class, 'profile']);
});

// export 
Route::get('/export/all/log', [App\Http\Controllers\ReportController::class, 'index']);
Route::get('/export/{filter}', [App\Http\Controllers\ReportController::class, 'reportByFilter']);
Route::get('/export/status/{status}', [App\Http\Controllers\ReportController::class, 'reportByStatus']);
Route::get('/export/logs/lastest_report', [App\Http\Controllers\ReportController::class, 'reportLastest']);

Route::post('/export/logs/daterange', [App\Http\Controllers\ReportController::class, 'reportDateRange']);
Route::post('/export/all_agent_logs/daterange', [App\Http\Controllers\ReportController::class, 'reportAllAgentLog']);
Route::get('/export/logs/{id}/region', [App\Http\Controllers\ReportController::class, 'reportByRegion']);
Route::post('/export/customer/{id}', [App\Http\Controllers\ReportController::class, 'reportEachCustomerLog']);

Route::get('/filter', [App\Http\Controllers\LogController::class, 'filter']);
Route::get('/successPercentage', [App\Http\Controllers\LogController::class, 'successPercentage']);
