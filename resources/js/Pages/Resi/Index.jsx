import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import TableHeading from "@/Components/TableHeading";


export default function Index({auth, resis, queryParams = null, success}){
    queryParams = queryParams || {
    }
    const searchFieldChanged = (name, value) => {
        if(value){
            queryParams[name] = value
        }else{
            delete queryParams[name]
        }

        router.get(route('resi.index'), queryParams)
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
        router.get(route('resi.index'), queryParams)
    }
    const deleteProject = (resi) => {
        if(!window.confirm('Are you sure want to delete the project?')){
            return;
        }
        router.delete(route('resi.destroy', resi.id))
    }
    const formatCurrency = (number) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(number);
    }
    const handleReload = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Bukti Tanda Terima</h2>
                </div>
            }
        >
        <Head title="BTT" />

        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (<div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                        {success}
                    </div>)}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-5">
                                <Link href="#" onClick={handleReload} style={{ border: '1px solid blue' }} className="bg-white-500 py-2 px-3 text-blue-600 rounded shadow transition-all hover:bg-blue-500 hover:text-white ms-2">
                                    Refresh
                                </Link>
                                <Link href={route('resi.create')} style={{ border: '1px solid #10B981' }} className="bg-white-500 py-2 px-3 text-emerald-600 rounded shadow transition-all hover:bg-emerald-500 hover:text-white ms-2">
                                    Tambah
                                </Link>
                                <Link href={route('resi.cetak-penjualan')} style={{ border: '1px solid gray' }} className="bg-white-500 py-2 px-3 text-gray-600 rounded shadow transition-all hover:bg-gray-500 hover:text-white ms-2">
                                    Cetak Penjualan
                                </Link>
                            </div>
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <TableHeading
                                            name="id"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                            >
                                                ID
                                            </TableHeading>
                                            <TableHeading
                                            name="created_at"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                            >
                                                Tanggal
                                            </TableHeading>
                                            <TableHeading
                                            name="nama_pengirim"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                            >
                                                Pengirim
                                            </TableHeading>
                                            <TableHeading
                                            name="nama_penerima"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                            >
                                                Penerima
                                            </TableHeading>
                                            <th className="px-3 py-2">Isi Kiriman</th>
                                            <th className="px-3 py-2">Qty / Koli</th>
                                            <TableHeading
                                            name="berat_asli"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                            >
                                                Berat
                                            </TableHeading>
                                            <th className="px-3 py-2">Biaya</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {resis.data && resis.data.length > 0 ? (
                                            resis.data.map(resi => (
                                                <tr key={resi.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th className="px-3 py-2 text-nowrap text-xs">
                                                        <Link href={route('resi.edit', resi.id)} style={{ border: '1px solid #F59E0B' }} className="bg-white-500 py-1 px-2 rounded shadow transition-all text-amber-500 hover:bg-amber-500 hover:text-white">
                                                        {resi.no_resi}
                                                        </Link>
                                                    </th>
                                                    <td className="px-2 py-1 text-xs">{resi.created_at}</td>
                                                    <td className="px-2 py-1 text-nowrap text-xs">{resi.nama_pengirim}</td>
                                                    <td className="px-2 py-1 text-nowrap text-xs">{resi.nama_penerima}</td>
                                                    <td className="px-2 py-1 text-xs">{resi.isi_kiriman}</td>
                                                    <td className="px-2 py-1 text-xs">{resi.qty}</td>
                                                    <td className="px-2 py-1 text-xs">{resi.berat_asli} kg</td>
                                                    <td className="px-2 py-1 text-xs">{formatCurrency(resi.biaya_kirim)}</td>
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
                        </div>
                        <Pagination links={resis.meta.links}/>
                    </div>
                </div>
        </div>
        </AuthenticatedLayout>
    )
}
