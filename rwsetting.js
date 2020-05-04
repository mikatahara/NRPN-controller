
$(document).ready(function(){
	$('#send').click(function() {
		log.innerText = 'sendがクリックされました！';
	});

	$('#sync').click(function() {
		goload();
	});

});

/* パラメータファイルの保存 */
function savedata()
{
	var i, k;
	var savetext='';

	savetext += "__start__";
	savetext +="\r\n";

	savetext += mChannel.toString(10);
	savetext += ",";
	savetext += mNoteNum.toString(10);
	savetext +="\r\n";

	for(var i=0; i<16; i++){
		savetext += mNrpnc[i].fGetMSB().toString(10);
		savetext += ",";
		savetext += mNrpnc[i].fGetLSB().toString(10);
		savetext += ",";
		savetext += mNrpnc[i].fGetDATAH().toString(10);
		savetext += ",";
		savetext += mNrpnc[i].fGetDATAL().toString(10);
		savetext += ",";
		savetext += mNrpnc[i].fGetNAME();
		savetext +="\r\n";
	}

	savetext += "__end__";
	savetext +="\r\n";

	var fn=document.getElementById("file_name");
	var fname=fn.value;
	var psave = new Blob([savetext]);
	download(psave, fname);
}

/* パラメータファイルの読み込み*/
function loaddata()
{
	var textFile = document.getElementById("filedata").files[0];

	if(log){
		// 選択されたファイル情報
		log.innerText = "ファイル名：";
		log.innerText += textFile.name;
		log.innerText += "\n";
		log.innerText += "ファイルサイズ：";
		log.innerText += textFile.size;
		log.innerText += " バイト\n";
		log.innerText += "MIME Type：";
		log.innerText += textFile.type;
		log.innerText += "\n";
		log.innerText += "---------------\n";
	}

	// テキストかどうか調べる
	if (textFile.type.indexOf("text/") != 0){
		ele.innerHTML += "選択したファイルはテキスト形式ではありません";
		return;
	}

	// テキストファイルなら処理を行う
	var reader = new FileReader();
	reader.onload = function(event){
		readresult(event.target.result);
	}
	reader.readAsText(textFile, "utf-8");

}

function readresult(text)
{
	var data;

	log.innerText += text;

	var line=text.split('\r\n');
	var tcont = line[1].split(',');

	mChannel=parseInt(tcont[0]); $('#channel').val(mChannel);
	mNoteNum=parseInt(tcont[1]); $('#note').val(mNoteNum);

	for(var i=0; i<16; i++){
		tcont = line[i+2].split(',');
		mNrpnc[i].fSetMSB(parseInt(tcont[0]));
		mNrpnc[i].fSetLSB(parseInt(tcont[1]));
		mNrpnc[i].fSetDATAH(parseInt(tcont[2]));
		mNrpnc[i].fSetDATAL(parseInt(tcont[3]));
		mNrpnc[i].fSetNAME(tcont[4]);
	}

}
