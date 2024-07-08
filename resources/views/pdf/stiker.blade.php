<!-- Favicons -->
<link href="{{ asset('assets/img/favicon.png') }}" rel="icon">
<link href="{{ asset('assets/img/apple-touch-icon.png') }}" rel="apple-touch-icon">

<!-- Google Fonts -->
<link href="https://fonts.gstatic.com" rel="preconnect">
<link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

<!-- Vendor CSS Files -->
<link href="{{ asset('assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/quill/quill.snow.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/quill/quill.bubble.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/remixicon/remixicon.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/simple-datatables/style.css') }}" rel="stylesheet">

<!-- Template Main CSS File -->
<link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>


<head>
    <title>BTT - {{ $resi->no_resi }}</title>
    <script type="text/javascript">
        function generateBarCode() {
            var nric = $('#text').val();
            console.log(nric);
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=50x50';
            $('#barcode').attr('src', url);
        }
    </script>
</head>

<section class="section" id="lbr1">
    <br>
    @for ($i = 1; $i <= $resi->qty; $i++)
        <table style="border-spacing: 0px; padding: 0px; font-size: 12px;">
            <tr>
                <td rowspan="6">
                    <img id='barcode{{ $i }}'
                        src="https://api.qrserver.com/v1/create-qr-code/?data=https://cargo-kita.test/{{ $resi->no_resi }}{{ $i }}"
                        alt="" width="100" height="100" />
                </td>
            </tr>
            <tr>
                <td colspan="3" style="vertical-align: top;">
                    {{ (new \Carbon\Carbon($resi->created_at))->format('d/m/Y') }}</td>
            </tr>
            <tr>
                <td colspan="3" style="vertical-align: top;">HANKAM AGEN</td>
            </tr>
            <tr>
                <td colspan="3" style="vertical-align: top;">{{ $resi->isi_kiriman }}</td>
            </tr>
            <tr>
                <td width="1" style="vertical-align: top;">From</td>
                <td style="vertical-align: top;"> : </td>
                <td style="vertical-align: top;">BEKASI KOTA</td>
            </tr>
            <tr>
                <td style="vertical-align: top;">To</td>
                <td style="vertical-align: top;"> : </td>
                <td style="vertical-align: top;">KULON PROGO</td>
            </tr>
            <tr>
                <td>{{ $resi->no_resi }}{{ $i }}</td>
                <td colspan="2"></td>
                <td><b>{{ $i }}/{{ $resi->qty }}</b></td>
            </tr>
        </table>
        <br>
    @endfor
</section>
