<div class="sidebar">
    <!-- Sidebar user (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">

        <div class="info">
            <a href="#" class="d-block">Admin</a>
        </div>
    </div>

    <nav class="mt-2 constActiveSidebar">
        <ul class="nav nav-pills nav-sidebar flex-column nav-flat text-sm nav-legacy nav-compact nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">

            <li class="nav-item">
                <a href="{{ route( admin_route('dashboard') ) }}" class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt"></i> <p>Dashboard</p>
                </a>
            </li>

            {{-- User Management --}}
            <li class="nav-item has-treeview menu-open">
                <a href="#" class="nav-link active">
                    <i class="nav-icon fas fa-users"></i>
                    <p>Employee Management <i class="right fas fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{ route(admin_route('employee.create')) }}" class="nav-link">
                            <i class="far fa-circle nav-icon"></i> <p>Add New</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route(admin_route('employee.index')) }}" class="nav-link">
                            <i class="far fa-circle nav-icon"></i> <p>Manage</p>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a href="javascript:void(0)" data-toggle="modal" data-target="#modal-logout" class="nav-link">
                    <i class="nav-icon fas fa-sign-out-alt"></i>
                    <p>Logout</p>
                </a>
            </li>

        </ul>
    </nav>
</div>

@push('modals')
<div class="modal fade" id="modal-logout">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Logout</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Are you sure sure you want to log out ?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-yarn" onclick="javascript:window.location='{{ route( admin_route('logout') ) }}'">Logout</button>
            </div>
        </div>
    </div>
</div>
@endpush
