import { FaCircle } from "react-icons/fa";
const CoinsEarned = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 bg-blue-500 border border-amber-300 rounded-3xl p-6 flex gap-4 items-center font-semibold"><FaCircle size={30} className="text-amber-300"/> <span className="text-2xl">Coins</span></div>
  )
}

export default CoinsEarned