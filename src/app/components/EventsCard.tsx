import Link from "next/link"

const events = [
  {
    date: "2024年3月15日（金）13:00-17:00",
    title: "春季技術交流会2024",
    link: "#",
  },
  {
    date: "2024年4月5日（金）15:00-18:00",
    title: "新入生歓迎会",
    link: "#",
  },
  {
    date: "2024年4月20日（土）10:00-16:00",
    title: "第1回 学生研究発表会",
    link: "#",
  },
  {
    date: "2024年5月10日（金）13:30-17:30",
    title: "企業見学会 - テクノロジー最前線",
    link: "#",
  },
]

export default function EventInfo() {
  return (
    <section className="mx-auto px-4 py-12 bg-gray-100">
      <h2 className="text-center mb-8">
        <span className="block text-3xl font-bold">イベント情報</span>
        <span className="text-[#002B96] text-sm">Event Info</span>
      </h2>
      <div className="bg-white rounded-lg p-8 shadow-sm divide-y divide-gray-100">
        {events.map((event, index) => (
          <div key={index} className="py-6 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <time className="text-sm text-gray-500">{event.date}</time>
                <h3 className="text-lg font-bold mt-1">{event.title}</h3>
              </div>
              <Link
                href={event.link}
                className="inline-flex items-center justify-center px-4 py-2 bg-[#002B96] text-white rounded hover:bg-[#001b5e] transition-colors text-sm whitespace-nowrap"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

