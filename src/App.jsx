import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Heart, Music, Sparkles, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'
import { useAudio } from './lib/AudioContext.jsx';

// Heart particles component
function HeartsBackground() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    fontSize: `${15 + Math.random() * 15}px`
  }))

  return (
    <div className="hearts-bg">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: heart.left,
            animationDelay: heart.animationDelay,
            fontSize: heart.fontSize
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

// Intro Page
function IntroPage() {
  const navigate = useNavigate();
  const { play } = useAudio();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1000); // Show button after 1 second
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    play();
    navigate('/home'); // Navigate to the main content after playing music
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative z-10 bg-gradient-to-br from-blue-100 to-purple-100 animate-fadeIn">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mb-6">
          عندي لك هدية وتعبت عليها وايد لاكن تستاهلها واحبك واعشقك بوبي💙
        </p>
        {showButton && (
          <Button
            onClick={handleEnter}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xl px-10 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center gap-3 animate-pulse"
          >
            <Play className="w-7 h-7" />
            اضغط هني
          </Button>
        )}
      </div>
    </div>
  );
}

// Home Page
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        <div className="flex justify-center mb-8">
          <Heart className="w-20 h-20 text-blue-500 animate-heartbeat" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mb-6">
          I Love you boby💙
        </h1>
        
        <p className="text-2xl md:text-3xl text-purple-700 font-semibold mb-8">
          أنا وياك دائماً وصوبك دائماً . . أحبك يا أغلى من روحي
        </p>
        
        <div className="flex items-center justify-center gap-2 text-lg text-blue-600 mb-8">
          <Sparkles className="w-6 h-6" />
          <span>بين إيديا - ماجد المهندس</span>
          <Music className="w-6 h-6" />
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-blue-200">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
            "الله يديمك لي يارب"
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link to="/story">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xl px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all">
              اقرأ قصتنا
            </Button>
          </Link>
          <Link to="/gallery">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white text-xl px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all">
              معرض الذكريات
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Story Page
function StoryPage() {
  return (
    <div className="min-h-screen p-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Link to="/home">
          <Button className="mb-8 bg-blue-500 hover:bg-blue-600 text-white">
            العودة للرئيسية
          </Button>
        </Link>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-200 space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mb-12">
            قصتنا
          </h1>
          <p className="text-xl md:text-2xl text-center text-blue-600 mb-8">أحبك</p>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800">
            <div className="border-r-4 border-blue-400 pr-6">
              <p>
                يوم من الأيام شفت شخص صدفة وشفته في حديقة صوب بيتنا، وكان شخص يحب المشاكل وكان كرهي له مب طبيعي ونفس الشي. المهم، ونحن دائماً حقين المنطقة نسوي لعب بالأيام بالحديقة، والمهم يا اليوم الي نلعب فيه وهذا الشخص كان ربيعهم ويا الحديقة هو وأخوه وهو أكبر عن أخوه.
              </p>
              <p className="mt-4">
                لعبنا وخلصنا وهو كان يدور حسابي وانا كنت أدور حسابه لين ماحصلنا حسابات بعض، لاكن انا ضفته والشخص. في البداية ماكان عندي له مشاعر ولا أعرفه وايد لاكن ضفته وسولفنا شوي ومن بعدها ماصرنا نكلم بعض أبداً أبداً، وتمت أسابيع وشهور مانكلم بعض بس سولفنا دقيقة وحدة ومن بعدها ماصرنا نكلم بعض ولا بينا أي شي لا ستريك ولا أي شي.
              </p>
            </div>
            

            
            <div className="border-r-4 border-blue-400 pr-6">
              <p>
                يا اليوم الي انتقل إلى رحمة الله واحد من أهلي وأهله وشخص وايد وايد عزيز ع قلوبنا، وخلصنا كل شي وشفت الشخص أول يوم صدفة ولا كلمته ولا بينا أي شي. وثاني يوم عزاء تاريخ [2024-9-8] شفته صدفة وتعشينا ويا بعض ولا كلمنا بعض، وخلص اليوم وكل واحد مكسور بداخله فاقدين شخص عزيز علينا.
              </p>
              <p className="mt-4">
                والمهم الشخص الي عرفته هذا ماكنت أعرف أنه شخص من أهلي وقريب مني، ورجعنا البيت ويعني كلمته حبه حبه وسولفنا ونمنا ونفس الشي ثاني يوم وثالث. لاكن ثالث يوم كان شوي غير، تعودنا ع بعض نسولف يومياً وكل واحد يطرش صورة عساس ستريك لاكن لبعض بس وصورة حلوة وأغنية حلوة.
              </p>
            </div>

            <div className="border-r-4 border-blue-400 pr-6">
              <p>
                ويا اليوم الي انتقل إلى رحمة الله واحد من أهلي وأهله وشخص وايد وايد عزيز ع قلوبنا، وخلصنا كل شي وشفت الشخص أول يوم صدفة ولا كلمته ولا بينا أي شي. وثاني يوم عزاء تاريخ [2024-9-8] شفته صدفة وتعشينا ويا بعض ولا كلمنا بعض، وخلص اليوم وكل واحد مكسور بداخله فاقدين شخص عزيز علينا.
              </p>
              <p className="mt-4">
                والمهم الشخص الي عرفته هذا ماكنت أعرف أنه شخص من أهلي وقريب مني، ورجعنا البيت ويعني كلمته حبه حبه وسولفنا ونمنا ونفس الشي ثاني يوم وثالث. لاكن ثالث يوم كان شوي غير، تعودنا ع بعض نسولف يومياً وكل واحد يطرش صورة عساس ستريك لاكن لبعض بس وصورة حلوة وأغنية حلوة.
              </p>
            </div>

            <div className="border-r-4 border-blue-400 pr-6">
              <p>
                والمهم الشخص هذا اسمه (عمر)، ومع الأيام عرفت كل شي عنه ووقت نومه وأسلوبه وسوالفه وتفاصيله ووين يروح ووين يرجع، كل تفاصيله أعرفها وتفاصيل يومه أعرفها. والمهم وعمر يومياً أنا وياه و24 ساعة وياه، أقوم وياه أرقد وياه 24 ساعة وياه وما يكتمل يومي بدونه، حرفياً أول مانقوم لين مانرقد ويا بعض.
              </p>
            </div>

            <div className="border-r-4 border-blue-400 pr-6">
              <p>
                والمهم دقينا لبعض وسولفنا ورقدنا كل يوم نفس الشي، وكل يوم المشاعر تزيد وحبينا بعض. لاكن كل واحد كاتم بقلبه بقلبه كلام للثاني لاكن يخاف يقوله وينددم، وكل واحد يحسب الشخص الثاني ماله مشاعر بقلبه ويحسب لو قال الي بقلبه الثاني يعطيه بلوك.
              </p>
              <p className="mt-4">
                والمهم في أنا فيني عادة إذا كنت تعبان أخربط وأيب العيد، ففي يوم من الأيام كنت داق لعمر وبنام وكنت تعبان وايد فقلتله وأنا نايم وتعبان قلتله: "أحبببببك" - أول كلمة حب تطلع بينا. وهو مايعرف شو يسوي ومن كثر الصدمة تم ساكت وما يعرف شو يقول، وأنا كملت نومي طبيعي.
              </p>
            </div>
            

            
            <div className="border-r-4 border-blue-400 pr-6">
              <p>
                والمهم يا يوم من الأيام ووالله رزق أختي ببنت الحمد لله، وعندي أخوان وخوات لاكن يداومون. فطبيعي كل بنت إذا الله رزقها بمولود تنام بيت أهلها 40 يوم، فأختي نامت في بيتنا وبعض الأيام أنا أنام عندها أجوف بنتها. والمهم فماقدر أدق لعمر وأسولف وياه فشو تمت أسولف وياه بسناب.
              </p>
              <p className="mt-4">
                وكل واحد كاتم بقلببببه ووده يعترف للثاني بالحب والمشاعر الي بقلبه، وكل واحد كاتم ويخاف يعترف للثاني. فأنا يوسف خلاص وصللللت حدي كتما وايد، وقلت في بالي لمتى بتم كاتم مشاعري وأبي أعترفله لاكن خاييييف من رد فعله وخايففف يعطيني بلوك. فقلت لمتى بتريا وأنا كاتم؟
              </p>
              <p className="mt-4">
                فوصلت حدي خلاص ولين ولين ما اعترفت له بمشاعري، كلام طويل وكله حب واعترافات حب وأني أغار عليه وأني وأني... بعد ماكتبت الكلام خفت وسكرت التلفون أخاف من ردة فعله، وماوصلني إشعار أنه طرش شي يعني كتب شي.
              </p>
              <p className="mt-4">
                وبعد 3 دقايق تقريباً وصلني إشعار أنه كتب، وأول مابطل الجات المحادثة، إلا وأشوف كلام طوييييل ونفس الكلام الي كتبته له كتبه لي! وهو كان ينتظر أني أعترفله ورد علي بكلام حب واعترافات، وكل واحد مستانس وفرحان.
              </p>
            </div>
            
            <div className="border-r-4 border-purple-400 pr-6 bg-gradient-to-l from-blue-50 to-purple-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">رسالة من القلب</h2>
              <p className="text-2xl italic text-purple-900 leading-relaxed">
                "وأنا أدري بتجوف هالكلام كله وحاب أقولك أني والله أحبك وأعشقك، وأنه مكانتك في قلبي والله غير ويشهد الله علي ماحبيت إنسان كثر ماحبيتك، وأدعي كل يوم أنه الله يديمك لي طول العمر وأني أحبك وايد وايد 💙💙💙💙"
              </p>
            </div>
            
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
              <p className="text-2xl font-bold text-purple-800">
                ومرت الأيام وتعلقنا ببعض والأمور حلللوووه وولليوم وياي هو والمشاعر والحب للآن فينا
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Heart className="w-12 h-12 text-blue-500 animate-heartbeat" />
                <Heart className="w-12 h-12 text-purple-500 animate-heartbeat" style={{ animationDelay: '0.3s' }} />
                <Heart className="w-12 h-12 text-blue-500 animate-heartbeat" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Gallery Page
function GalleryPage() {
  return (
    <div className="min-h-screen p-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <Link to="/home">
          <Button className="mb-8 bg-blue-500 hover:bg-blue-600 text-white">
            العودة للرئيسية
          </Button>
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-200 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mb-12">
            معرض الذكريات
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <img 
                src="/IMG_1364.jpeg"  // هذا مسار الصورة من public
                alt="عمر" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-2xl font-bold">عمر ❤️</p>
              </div>
            </div>

            {/* هنا ممكن تضيف صور ثانية بنفس الطريقة */}
          </div>
        </div>
      </div>
    </div>
  )
}

function MusicControl() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="fixed top-4 left-4 z-50">
      <Button onClick={togglePlay} className="bg-white/80 text-blue-500 hover:bg-white rounded-full p-3 shadow-lg">
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </Button>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <HeartsBackground />
      <MusicControl />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  )
}
