import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants.jsx";
import { Head, router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Index({auth, projects, queryParams = null}){
    queryParams = queryParams || {}
    const searchFieldChanged = (name, value) => {
        if(value){
            queryParams[name] = value
        }else{
            delete queryParams[name]
        }

        router.get(route('project.index'), queryParams)
    }
    const onKeyPress = (name, e) => {
        if(e.key !== 'Enter') return

        searchFieldChanged(name, e.target.value)
    }

    const sortChanged = (name) => {
        if(name === queryParams.sort_field){
            if(queryParams.sort_direction === 'asc'){
                queryParams.sort_direction = 'desc'
            }else{
                queryParams.sort_direction = 'asc'
            }
        }else{
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
        }
        router.get(route('project.index'), queryParams)
    }

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>}
        >
        <Head title="Projects" />
        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                <tr className="text-nowrap">
                                    <th onClick={e => sortChanged('id')} className="px-3 py-2">ID</th>
                                    <th className="px-3 py-2">Image</th>
                                    <th onClick={e => sortChanged('name')} className="px-3 py-2">Name</th>
                                    <th onClick={e => sortChanged('status')} className="px-3 py-2">Status</th>
                                    <th onClick={e => sortChanged('created_at')} className="px-3 py-2">Create Date</th>
                                    <th onClick={e => sortChanged('due_date')} className="px-3 py-2">Due Date</th>
                                    <th className="px-3 py-2">Create By</th>
                                    <th className="px-3 py-2">Actions</th>
                                </tr>
                            </thead>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                <tr className="text-nowrap">
                                    <th className="px-3 py-2"></th>
                                    <th className="px-3 py-2"></th>
                                    <th className="px-3 py-2">
                                        <TextInput 
                                            className="w-full"
                                            defaultValue={queryParams.name} 
                                            placeholder="Project Name"
                                            onBlur={(e) => searchFieldChanged('name', e.target.value)}
                                            onKeyPress={(e) => onKeyPress('name', e)}
                                        />
                                    </th>
                                    <th className="px-3 py-2">
                                        <SelectInput 
                                            className="w-full" 
                                            defaultValue={queryParams.status}
                                            placeholder="Status"
                                            onChange={(e) => searchFieldChanged('status', e.target.value)}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="pending">Pending</option>
                                            <option value="in_progress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </SelectInput>
                                    </th>
                                    <th className="px-3 py-2"></th>
                                    <th className="px-3 py-2"></th>
                                    <th className="px-3 py-2"></th>
                                    <th className="px-3 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {projects.data && projects.data.length > 0 ? (
                                projects.data.map(project => (
                                    <tr key={project.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-3 py-2">{project.id}</td>
                                        <td className="px-3 py-2">
                                            <img src={project.image_path} style={{ width: 60 }} alt={project.name}/>
                                        </td>
                                        <td className="px-3 py-2">{project.name}</td>
                                        <td className="px-3 py-2">
                                            <span className={"px-2 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]}>
                                                {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">{project.created_at}</td>
                                        <td className="px-3 py-2">{project.due_date}</td>
                                        <td className="px-3 py-2">{project.createdBy.name}</td>
                                        <td className="px-3 py-2">
                                            <Link href={route('project.edit', project.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>
                                            <Link href={route('project.destroy', project.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="px-3 py-2 text-center">Data Kosong !</td>
                                </tr>
                            )}

                            </tbody>
                        </table>
                        </div>
                        <Pagination links={projects.meta.links}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}