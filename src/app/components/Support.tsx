"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Section } from "lucide-react"

export default function StudentSupport() {
  const [currentPage, setCurrentPage] = useState(0)

  const supportItems = [
    {
      title: "奨学金申請受付開始",
      date: "2025年4月1日",
      description: "2025年度前期の奨学金申請の受付を開始しました。申請期限は4月30日までです。",
      category: "奨学金",
    },
    {
      title: "就職活動支援セミナー",
      date: "2025年5月15日",
      description: "企業の人事担当者を招いて、効果的な履歴書の書き方と面接対策について学びます。",
      category: "キャリア支援",
    },
    {
      title: "健康診断実施のお知らせ",
      date: "2025年5月20日",
      description: "年次健康診断を実施します。必ず指定された日時に受診してください。",
      category: "健康支援",
    },
    {
      title: "留学生交流イベント",
      date: "2025年6月1日",
      description: "国際交流パーティーを開催します。世界各国の料理と文化を楽しみましょう。",
      category: "国際交流",
    },
  ]

  const totalPages = Math.ceil(supportItems.length / 2)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">学生支援</h2>
        <p className="text-[#002B96] text-sm0">Student Support</p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full flex-shrink-0">
              {supportItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-blue-50 text-blue-600">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.date}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          aria-label="前のページ"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          aria-label="次のページ"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === currentPage ? "bg-blue-600" : "bg-gray-300"}`}
              aria-label={`ページ ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

