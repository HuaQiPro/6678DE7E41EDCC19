const Base64 = {
    encode(str) {
        // ���ȣ�����ʹ�� encodeURIComponent ����ðٷֱȱ����UTF-8��Ȼ�����ǽ��ٷֱȱ���ת��Ϊԭʼ�ֽڣ����洢��btoa����
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode(Number('0x' + p1));
            }));
    },
    decode(str) {
        // ���̣����ֽ������ٷֱȱ��룬�ٵ�ԭʼ�ַ���
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
}


var private_key = '-----BEGIN RSA PRIVATE KEY-----\n' +
'MIICXQIBAAKBgQDWu+XOOXb0rjTtXdfUSVKbXH3pK2FyT0LjPP0yz8t2tOex5gVG\n' +
'wAnji3HK/LpTh8y27acU/k9QWWUvvZGkbfMvE1wI8mV3CvYaUzKo44lMAxoUuIif\n' +
'kI82EA5Zmw5KSmGz7kYq6yEFG0l8cLWICX7p2VgF/By2o3CizgF+VYa0FwIDAQAB\n' +
'AoGAX7r603pY5vI3FE9O5gweMLcGRwoY8l4VorrQ4nMy8OPrmyrB1W3Nusyy2Vzc\n' +
'MFsNT8wZPcm2UEraSnNH17dQvy0oqEMtiHtCkvEey0cWDaW+TgxgcZ36JJJ2hWNd\n' +
'SyE5jgHOTAHKi2vzM6jCQ6iUUVctkpR23BYkSW7XRIg9hNkCQQD+531ZgcUH0eV3\n' +
'NHvOOs8eXaxkthTvvCKxmfVoQ5pVPCDFtkTZ05tj8YhsitJfCyDdG6VNvj2ft2ta\n' +
'5JyaryFNAkEA16gz1pfoJ5UKwrDCmXPXuy2Y3y/UsJ2j2XJDdukWVBqD39Nt4w02\n' +
'NWxxNVlGr/s4apXkgWPE11B2Ksa0OWZ48wJASedh32aRco/3gJU14/gG/t3X0qc7\n' +
'8LnSMT3a+ezHvTieo9QRqDoCznpDvHyPO8ElORX/2kdy5HCwbnzjrrFh7QJBAKs9\n' +
'hYQFdTNQ9o1nm+4LfSbE6xl1unZPhlZYk9ds9+zqbQKiuSPMTtoW9MG+1RFR8xc3\n' +
'VI2lchziaCJJS7w0cR8CQQCbwUMho5opxABsS2IdXkxbVX4U8Fx5/h/JiBrZrvXr\n' +
'XJ5nmf35M+xNdl17N1ZSSk387bXj5lPOQhkuheCBpCSz\n' +
'-----END RSA PRIVATE KEY-----';


        $.ajax({
            type: "post",
            url: "/api/reader_js.php",
            data: {
                articleid: articleid,
                chapterid: chapterid,
                pid: pid
            },
            success: function(data) {
				var decrypt = new JSEncrypt();
				decrypt.setPrivateKey(private_key);
                $('#article').html(Base64.decode(decrypt.decryptUnicodeLong(data))); //ע�� #article ��Ҫ����������ı�ǩһ��
            }
        });
		
		


		
