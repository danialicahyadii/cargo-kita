import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({auth, resi}){
    const {data, setData, post, errors, reset} = useForm({
        nama_pengirim: resi.nama_pengirim || "",
        no_hp_pengirim: resi.no_hp_pengirim || "",
        alamat_pengirim: resi.alamat_pengirim || "",
        nama_penerima: resi.nama_penerima || "",
        no_hp_penerima: resi.no_hp_penerima || "",
        alamat_penerima: resi.alamat_penerima || "",
        isi_kiriman: resi.isi_kiriman || "",
        qty: resi.qty || "",
        berat_volume: resi.berat_volume || "",
        berat_asli: resi.berat_asli || "",
        biaya_kirim: resi.biaya_kirim || "",
        biaya_packing: resi.biaya_packing || "",
        biaya_asuransi: resi.biaya_asuransi || "",
        _method: 'PUT'
    })
    const onSubmit = (e) => {
        e.preventDefault();

        post(route('resi.update', resi.id))
    }
    const handleOpenInNewTab = (e) => {
        e.preventDefault();
        const url = route('resi.show', resi.id);
        window.open(url, '_blank');
    };

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit Resi "{resi.no_resi}"</h2>
                </div>
            }
        >
        <Head title="Resi" />
        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div class="grid grid-cols-2 gap-12 mb-10">
                            <div
                            class=" border-gray-300 dark:border-gray-600"
                            >
                                <h4 className="mb-3"><strong>Pengirim</strong></h4>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="w-full">
                                        <InputLabel
                                        value="Nama"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="nama_pengirim"
                                        type="text"
                                        name="nama_pengirim"
                                        value={data.nama_pengirim}
                                        placeholder="Nama Pengirim"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('nama_pengirim', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.nama_pengirim} className="mt-2"/>
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                        value="No Hp"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="no_hp_pengirim"
                                        type="number"
                                        name="no_hp_pengirim"
                                        value={data.no_hp_pengirim}
                                        placeholder="Nomor Handphone / Nomor WA"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('no_hp_pengirim', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.no_hp_pengirim} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <InputLabel
                                        value="Alamat"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="alamat_pengirim"
                                        type="text"
                                        name="alamat_pengirim"
                                        value={data.alamat_pengirim}
                                        placeholder="Alamat Pengirim"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('alamat_pengirim', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.alamat_pengirim} className="mt-2"/>
                                    </div>
                                </div>
                            </div>
                            <div
                            class="border-gray-300 dark:border-gray-600"
                            >
                                <h4 className="mb-3"><strong>Penerima</strong></h4>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="w-full">
                                        <InputLabel
                                        value="Nama"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="nama_penerima"
                                        type="text"
                                        name="nama_penerima"
                                        value={data.nama_penerima}
                                        placeholder="Nama Penerima"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('nama_penerima', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.nama_penerima} className="mt-2"/>
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                        value="No Hp"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="no_hp_penerima"
                                        type="number"
                                        name="no_hp_penerima"
                                        value={data.no_hp_penerima}
                                        placeholder="Nomor Handphone / Nomor WA"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('no_hp_penerima', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.no_hp_penerima} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <InputLabel
                                        value="Alamat"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="alamat_penerima"
                                        type="text"
                                        name="alamat_penerima"
                                        value={data.alamat_penerima}
                                        placeholder="Alamat Penerima"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('alamat_penerima', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.alamat_penerima} className="mt-2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid gap-12">
                            <div
                            class=" border-gray-300 dark:border-gray-600"
                            >
                                <h4 className="mb-3"><strong>Detail Kiriman</strong></h4>
                                <div className="grid gap-4 sm:grid-cols-4 sm:gap-6">
                                    <div className="sm:col-span-1">
                                        <InputLabel
                                        value="Isi Kiriman"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="isi_kiriman"
                                        type="text"
                                        name="isi_kiriman"
                                        value={data.isi_kiriman}
                                        placeholder="Isi Kiriman"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('isi_kiriman', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.isi_kiriman} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <InputLabel
                                        value="Qty/Koli"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="qty"
                                        type="number"
                                        name="qty"
                                        value={data.qty}
                                        placeholder="Qty"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('qty', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.qty} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <InputLabel
                                        value="Berat Volume"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="berat_volume"
                                        type="number"
                                        name="berat_volume"
                                        value={data.berat_volume}
                                        placeholder="Berat Volume"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('berat_volume', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.berat_volume} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <InputLabel
                                        value="Berat Asli"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="berat_asli"
                                        type="number"
                                        name="berat_asli"
                                        value={data.berat_asli}
                                        placeholder="Berat Asli"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('berat_asli', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.berat_asli} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                    <InputLabel
                                        value="Biaya Kirim"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="biaya_kirim"
                                        type="number"
                                        name="biaya_kirim"
                                        value={data.biaya_kirim}
                                        placeholder="Biaya Kirim"
                                        min="1000"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('biaya_kirim', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.biaya_kirim} className="mt-2"/>
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                        value={
                                            <>
                                              Biaya Packing <span className="text-red-500">(*jika ada packing)</span>
                                            </>
                                          }
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="biaya_packing"
                                        type="number"
                                        name="biaya_packing"
                                        value={data.biaya_packing}
                                        placeholder="Biaya Packing"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('biaya_packing', e.target.value)}
                                        />
                                        <InputError message={errors.biaya_packing} className="mt-2"/>
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                        value={
                                            <>
                                              Biaya Asuransi <span className="text-red-500">(*jika ada asuransi)</span>
                                            </>
                                          }
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="biaya_asuransi"
                                        type="number"
                                        name="biaya_asuransi"
                                        value={data.biaya_asuransi}
                                        placeholder="Biaya Asuransi"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('biaya_asuransi', e.target.value)}
                                        />
                                        <InputError message={errors.biaya_asuransi} className="mt-2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={route('resi.index')} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-600">
                        <svg class="w-4 h-4 me-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"/>
                        </svg>
                            Batal
                        </Link>
                        <button type="submit" class="inline-flex ms-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-600">
                        <svg class="w-4 h-4 me-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3H5Zm3 11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6H8v-6Zm1-7V5h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M14 17h-4v-2h4v2Z" clip-rule="evenodd"/>
                        </svg>
                            Simpan
                        </button>
                        <button onClick={handleOpenInNewTab} class="inline-flex ms-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-amber-500 rounded-lg focus:ring-4 focus:ring-amber-200 dark:focus:ring-amber-900 hover:bg-amber-600">
                            <svg class="w-4 h-4 me-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z" clip-rule="evenodd"/>
                            </svg>
                            Cetak
                        </button>
                        </form>
                    </div>
                </div>
        </div>
        </AuthenticatedLayout>
    )
}
