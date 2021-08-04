const scriptName = "Leviathan";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */

// 출력 결과물 최하단 @Leviathan AI는 삭제 금지입니다.



function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    var now = new Date();                // 현재 날짜 가져오기


    if (msg == "!코인") {
        var coin1 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(0).text();
        var coin2 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(1).text();
        var coin3 = "\n\n정보 제공 : bybit.com / @Leviathan AI";
        replier.reply("암호화폐 갯수 : " + coin1 + "\n" + "거래소 갯수 : " + coin2 + coin3);
    }

    if (msg == "!시총") {
        var coin1 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(2).text();
        coin1 += "\n\n정보 제공 : bybit.com / @Leviathan AI";
        replier.reply("<시가 총액>\n" + coin1);
    }

    if (msg == "!거래량") {
        var coin1 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(3).text();
        coin1 += "\n\n정보 제공 : bybit.com / @Leviathan AI";
        replier.reply("<24시간 거래량>\n" + coin1);
    }

    if (msg == "!도미") {
        var coin1 = org.jsoup.Jsoup.connect("https://coinmarketcap.com/ko").get().select("a.cmc-link").get(4).text();
        coin1 += "\n\n정보 제공 : bybit.com / @Leviathan AI";
        replier.reply("<도미넌스>\n" + coin1 + "\n비트코인과 이더리움만 각각 표시");
    }

    if (msg == "!가스") {
        var total = "";
        var coin1 = org.jsoup.Jsoup.connect("https://etherscan.io/gastracker").get().select("div.text-secondary").get(2).text();
        total += "이더리움 가스 비용(Low) : \n" + coin1 + "\n\n";
        var coin2 = org.jsoup.Jsoup.connect("https://etherscan.io/gastracker").get().select("div.text-secondary").get(3).text();
        total += "이더리움 가스 비용(Average) : \n" + coin2 + "\n\n";
        var coin3 = org.jsoup.Jsoup.connect("https://etherscan.io/gastracker").get().select("div.text-secondary").get(4).text();
        total += "이더리움 가스 비용(High) : \n" + coin3;
        total += "\n\n정보 제공 : bybit.com / @Leviathan AI";
        replier.reply(total);
    }


    if (msg == "!청산") {
        var temp = "";
        var text = "";

        temp = org.jsoup.Jsoup.connect("https://www.bybt.com/ko/LiquidationData").get().select("div[class=lq-tag-p]").get(0).text();
        text += "1시간 동안 청산된 금액 : \n" + temp;

        temp = org.jsoup.Jsoup.connect("https://www.bybt.com/ko/LiquidationData").get().select("div[class=lq-tag-p]").get(1).text();
        text += "\n\n4시간 동안 청산된 금액 : \n" + temp;

        temp = org.jsoup.Jsoup.connect("https://www.bybt.com/ko/LiquidationData").get().select("div[class=lq-tag-p]").get(2).text();
        text += "\n\n12시간 동안 청산된 금액 : \n" + temp;

        temp = org.jsoup.Jsoup.connect("https://www.bybt.com/ko/LiquidationData").get().select("div[class=lq-tag-p]").get(3).text();
        text += "\n\n24시간 동안 청산된 금액 : \n" + temp;

        text += "\n\nM은 100만 달러(한화 약 11억 4천만원)입니다.\n";
        text += "\n본 데이터는 바이빗의 BTC 마켓 기준입니다.";
        text += "\n\n정보 제공 : bybit.com / @Leviathan AI";

        replier.reply(text);
    }

}
// 몸체 끝


//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
    var textView = new android.widget.TextView(activity);
    textView.setText("Hello, World!");
    textView.setTextColor(android.graphics.Color.DKGRAY);
    activity.setContentView(textView);
}

function onStart(activity) { }

function onResume(activity) { }

function onPause(activity) { }

function onStop(activity) { }