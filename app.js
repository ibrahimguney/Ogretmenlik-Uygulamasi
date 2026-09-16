const weeks=[
["01","Derse giriş, roller ve fakülte–okul iş birliği","Yönergeyi, staj dosyasını, rol ve sorumlulukları tanıma.","Okul sistemini tanıma gözlemi için soru seti hazırla."],
["02","Öğretmenlik mesleği ve genel yeterlikler","Mesleki bilgi, beceri, tutum ve değerleri öğretmenin günlük işiyle ilişkilendirme.","Bir öğretmenin gününü süre ve görev türlerine göre gözlemle."],
["03","Öğrenciyi tanıma ve sınıf içi gözlem","Bireysel farklılıklar, betimleme–yorum ayrımı ve etik gözlem.","Bir öğrencinin okul gününü anonim ve yapılandırılmış biçimde izle."],
["04","Eğitim teknolojileri ve dijital sorumluluk","e-Okul, MEBBİS, EBA, KVKK ve güvenli dijital iletişim.","Bir dijital süreci erişim yetkisi ve mahremiyet açısından incele."],
["05","Okul yönetimi, kurullar ve mevzuat","1739 sayılı Kanun, zümre/şube/öğretmenler kurulu ve kayıt disiplini.","Bir kurul kararının ders planına olası etkisini raporla."],
["06","Öğretim programı ve ders planı","Öğrenme çıktısı, öğrenme kanıtı, farklılaştırma ve alan-özel yöntem seçimi.","EK-4 mantığıyla bir ders planı ve ölçme kanıtı tasarla."],
["07","Soru sorma, dönüt ve biçimlendirici değerlendirme","Bloom, bekleme süresi, etkili dönüt ve çıkış kartı.","Bir hatırlama sorusunu çözümleme sorusuna dönüştür."],
["08","Yansıtıcı düşünme ve ara dosya kontrolü","Schön, öz değerlendirme, kanıtla gelişim ve kişisel hedef.","Dosyanı kontrol et; ikinci yarı için üç ölçülebilir hedef yaz."],
["09","Sınıf yönetimi ve öğrenme ortamları","Rutin, geçiş, olumlu davranış desteği ve çevrim içi katılım.","Bir istenmeyen davranışın işlevini ve yapıcı tepki planını çözümle."],
["10","Mikro-öğretim ve ders anlatımına hazırlık","Planla–öğret–geri bildirim al–yeniden öğret döngüsü.","Kısa bir mikro-öğretim provası ve akran gözlemi yap."],
["11","Ders anlatımı ve yapıcı geri bildirim","EK-5 ölçütleriyle gözlem, zaman yönetimi, katılım ve plan revizyonu.","Ders anlatımını kanıtla; güçlü yön ve tek somut gelişim önerisi yaz."],
["12","Ölçme, kavram yanılgıları ve dönem sonu portfolyosu","Ölçme uyumu, alan yanılgıları, etik ve sürekli mesleki gelişim.","Portfolyonu teslim ölçütlerine göre tamamla ve gelişim planını yaz."]
];
const grid=document.querySelector("#week-grid");
if(grid){grid.innerHTML=weeks.map(function(w){return '<article class="week-card"><span class="week-no">HAFTA '+w[0]+'</span><h3>'+w[1]+'</h3><p>'+w[2]+'</p><a href="haftalar/hafta-'+w[0]+'.md">Haftayı aç →</a></article>';}).join("");}
