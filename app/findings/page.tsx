'use client'

import Image from 'next/image'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts'
import SectionNav from '@/components/SectionNav'
import ChartWrapper from '@/components/ChartWrapper'
import data from '@/content/research-data.json'

const ORANGE = '#F59E0B'
const ORANGE_LIGHT = '#FCD34D'
const NAVY = '#1e293b'
const GRAY = '#94a3b8'
const TEAL = '#14b8a6'
const RED = '#ef4444'
const BLUE = '#3b82f6'
const PURPLE = '#8b5cf6'

const sections = [
  { id: 'usage', label: 'AI Usage Patterns' },
  { id: 'ranked-risks', label: 'What Teens Fear Most' },
  { id: 'comfort-paradox', label: 'The Comfort Paradox' },
  { id: 'safety-blind-spot', label: 'The Safety Blind Spot' },
  { id: 'performance', label: 'Performance Risks' },
  { id: 'privacy', label: 'Privacy & Cybersecurity' },
  { id: 'misinformation', label: 'Misinformation Risks' },
  { id: 'social-psychological', label: 'Social & Psychological' },
  { id: 'ai-education', label: 'Where Teens Learn About AI' },
  { id: 'equity-gap', label: 'The Equity Gap' },
  { id: 'overall', label: 'Overall Risk Perception' },
]

const PIE_COLORS = [ORANGE, ORANGE_LIGHT, GRAY]

const RISK_COLORS: Record<string, string> = {
  'Performance': RED,
  'Social/Psychological': PURPLE,
  'Privacy': BLUE,
  'Misinformation': ORANGE,
}

const genderData = data.usageData.byGender.categories.map((cat, i) => ({
  category: cat,
  Female: data.usageData.byGender.female[i],
  Male: data.usageData.byGender.male[i],
}))

const gradeData = data.usageData.byGrade.categories.map((cat, i) => ({
  category: cat,
  'Grade 9-10': data.usageData.byGrade.grade9to10[i],
  'Grade 11-12': data.usageData.byGrade.grade11to12[i],
}))

const guidanceData = [
  { category: 'School (Public)', value: data.usageData.guidance.school.public },
  { category: 'School (Private)', value: data.usageData.guidance.school.private },
  { category: 'Parent (Public)', value: data.usageData.guidance.parent.public },
  { category: 'Parent (Private)', value: data.usageData.guidance.parent.private },
]

function RiskSection({
  id,
  title,
  items,
  frequent,
  nonFrequent,
}: {
  id: string
  title: string
  items: { id: string; label: string; score: number }[]
  frequent: number
  nonFrequent: number
}) {
  const comparisonData = [
    { group: 'Frequent Users', score: frequent },
    { group: 'Non-frequent Users', score: nonFrequent },
  ]

  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">{title}</h2>

      <ChartWrapper title="Individual Items (Mean Score out of 5)">
        <BarChart data={items} layout="vertical" margin={{ left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis type="number" domain={[0, 5]} tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="label" width={200} tick={{ fontSize: 11 }} />
          <Tooltip
            formatter={(value: number) => [value.toFixed(2), 'Score']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
          />
          <Bar dataKey="score" fill={ORANGE} radius={[0, 4, 4, 0]} barSize={24} />
        </BarChart>
      </ChartWrapper>

      <ChartWrapper title="Frequent vs Non-frequent Users" height={200}>
        <BarChart data={comparisonData} margin={{ left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="group" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: number) => [value.toFixed(2), 'Mean Score']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
          />
          <Bar dataKey="score" fill={ORANGE} radius={[4, 4, 0, 0]} barSize={48} />
        </BarChart>
      </ChartWrapper>
    </section>
  )
}

export default function FindingsPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Research Findings</h1>
        <p className="text-lg text-navy/70 leading-relaxed">
          Our data reveals a clear pattern: the more teens use AI, the less they worry about its
          risks. Explore the findings across AI usage patterns, risk perceptions, and the surprising
          gaps between what teens fear and where the real dangers lie.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 flex gap-12">
        <SectionNav sections={sections} />

        <div className="flex-1 min-w-0">
          {/* Usage Patterns */}
          <section id="usage" className="scroll-mt-24 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">AI Usage Patterns</h2>

            {/* Photo */}
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/teens-trust-ai-website/images/students-collaborating-2.jpg"
                alt="Students discussing research data at a table"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* AI Is Already the Norm */}
            <div className="bg-light-gray rounded-2xl p-8 mb-8">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-6">AI Is Already the Norm, Not the Exception</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
                  <p className="text-5xl font-bold text-teal-600 mb-2">{data.highlightStats.weeklyUse}%</p>
                  <p className="text-navy/70">of students use AI more than once a week for school</p>
                  <p className="text-sm text-navy/50 mt-1">19% use it daily | 35.5% a few times a week</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-teal-500">
                    <span className="text-2xl font-bold text-teal-600">{data.highlightStats.monthlyUse}%</span>
                    <span className="text-navy/70 ml-3">use AI for school at least monthly</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
                    <span className="text-2xl font-bold text-amber-600">{data.highlightStats.heardOfAI}%</span>
                    <span className="text-navy/70 ml-3">have heard of AI</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                    <span className="text-2xl font-bold text-red-500">{data.highlightStats.personalDevice}%</span>
                    <span className="text-navy/70 ml-3">have their own personal device</span>
                  </div>
                </div>
              </div>
              <div className="bg-navy text-white rounded-xl p-5 mt-6">
                <p className="text-sm leading-relaxed">
                  <strong>Key Insight:</strong> AI is not a future trend for teens — it is their present reality.
                  The question is no longer whether teens use AI, but whether adults are keeping up.
                </p>
              </div>
            </div>

            {/* Surprising Patterns */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-6">Some Surprising Patterns in Who Uses AI Most</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                  <p className="text-sm font-semibold text-red-500 mb-3">By Gender: Girls Lead</p>
                  <div className="flex items-end gap-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-red-500">60%</p>
                      <p className="text-xs text-navy/60 mt-1">of female students<br/>are frequent users</p>
                    </div>
                    <p className="text-sm text-navy/40 mb-2">vs</p>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-navy/60">51%</p>
                      <p className="text-xs text-navy/60 mt-1">of male students<br/>are frequent users</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-sm font-semibold text-blue-600 mb-3">By Grade: Seniors Dominate</p>
                  <div className="flex items-end gap-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-blue-600">68%</p>
                      <p className="text-xs text-navy/60 mt-1">of Gr. 11-12 are<br/>frequent users</p>
                    </div>
                    <p className="text-sm text-navy/40 mb-2">vs</p>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-navy/60">37%</p>
                      <p className="text-xs text-navy/60 mt-1">of Gr. 9-10 are<br/>frequent users</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-display font-semibold text-navy mb-2">What This Means:</p>
                <ul className="text-sm text-navy/70 space-y-1">
                  <li>Don&apos;t assume boys are the primary AI users — girls are using it just as much, if not more</li>
                  <li>Younger teens (Gr. 9-10) are an important window for early intervention and guidance</li>
                  <li>AI literacy programming should be designed for all genders, not stereotyped toward &apos;tech-oriented&apos; youth</li>
                </ul>
              </div>
            </div>

            <ChartWrapper title="How Often Do Teens Use AI?">
              <BarChart data={data.usageData.frequency} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 12 }} unit="%" />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Percentage']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="value" fill={ORANGE} radius={[4, 4, 0, 0]} barSize={48} />
              </BarChart>
            </ChartWrapper>

            <ChartWrapper title="User Categories" height={300}>
              <PieChart>
                <Pie
                  data={data.usageData.userCategories}
                  dataKey="value"
                  nameKey="label"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ label, value }: { label: string; value: number }) => `${label}: ${value}%`}
                >
                  {data.usageData.userCategories.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Percentage']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
              </PieChart>
            </ChartWrapper>

            <ChartWrapper title="Usage by Gender (%)">
              <BarChart data={genderData} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} unit="%" />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, '']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Legend />
                <Bar dataKey="Female" fill={ORANGE} radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="Male" fill={NAVY} radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ChartWrapper>

            <ChartWrapper title="Usage by Grade Level (%)">
              <BarChart data={gradeData} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} unit="%" />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, '']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Legend />
                <Bar dataKey="Grade 9-10" fill={ORANGE} radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="Grade 11-12" fill={NAVY} radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ChartWrapper>

            <ChartWrapper title="AI Tools Used (%)">
              <BarChart data={data.usageData.toolsUsed} layout="vertical" margin={{ left: 40, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" unit="%" tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="label" width={240} tick={{ fontSize: 11 }} />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Usage']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="value" fill={ORANGE} radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ChartWrapper>

            {/* Did You Know callout */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <p className="font-display font-bold text-amber-600 mb-2">Did You Know?</p>
              <ul className="text-sm text-navy/70 space-y-2">
                <li>Nearly half of teens primarily use chatbots — the same tools many adults are still just learning about.</li>
                <li>Grammar/writing aids are the second most popular, reflecting that school writing is a primary use case.</li>
                <li>Teens are not just consumers of AI — they are integrating it into their creative and academic workflows.</li>
              </ul>
            </div>

            <ChartWrapper title="AI Guidance Received (% of students)">
              <BarChart data={guidanceData} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 12 }} unit="%" />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Received guidance']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="value" fill={ORANGE} radius={[4, 4, 0, 0]} barSize={48} />
              </BarChart>
            </ChartWrapper>
          </section>

          {/* Ranked Risk Items */}
          <section id="ranked-risks" className="scroll-mt-24 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Their #1 Fear: &quot;AI Will Make Me a Worse Thinker&quot;
            </h2>
            <p className="text-navy/60 mb-8">Average agreement score (1-5 scale) | Higher = more concerned</p>

            <ChartWrapper title="All Risk Items Ranked" height={450}>
              <BarChart data={data.rankedRiskItems} layout="vertical" margin={{ left: 40, right: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 5]} tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="label" width={240} tick={{ fontSize: 11 }} />
                <Tooltip
                  formatter={(value: number) => [`${value.toFixed(2)}/5`, 'Score']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar
                  dataKey="score"
                  radius={[0, 4, 4, 0]}
                  barSize={24}
                >
                  {data.rankedRiskItems.map((item, i) => (
                    <Cell key={i} fill={RISK_COLORS[item.category] || GRAY} />
                  ))}
                </Bar>
              </BarChart>
            </ChartWrapper>

            <div className="flex flex-wrap gap-4 mt-4 mb-8">
              <span className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-red-500"></span> Performance Risks</span>
              <span className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-purple-500"></span> Social/Psychological</span>
              <span className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Privacy/Safety</span>
              <span className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-amber-500"></span> Misinformation</span>
            </div>
          </section>

          {/* The Comfort Paradox */}
          <section id="comfort-paradox" className="scroll-mt-24 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">The Comfort Paradox: More Use = Less Worry</h2>
            <p className="text-navy/60 mb-8">&quot;AI risks outweigh benefits&quot; agreement score by usage frequency</p>

            <ChartWrapper title="Risk Perception Decreases with Usage" height={350}>
              <BarChart data={data.comfortParadox.byFrequency} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [value.toFixed(2), 'Agreement Score']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="score" radius={[4, 4, 0, 0]} barSize={56}>
                  {data.comfortParadox.byFrequency.map((entry, i) => (
                    <Cell key={i} fill={entry.score >= 3 ? RED : TEAL} />
                  ))}
                </Bar>
              </BarChart>
            </ChartWrapper>

            <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mt-6">
              <p className="text-sm text-navy/80 leading-relaxed">
                <strong>Statistically significant correlation (r = {data.comfortParadox.correlation.r}, p &lt; {data.comfortParadox.correlation.p}):</strong>{' '}
                The more teens use AI, the less they believe risks outweigh benefits.
                This is the Comfort Paradox — familiarity breeds comfort, but not necessarily understanding.
                Heavy users may be underestimating real risks.
              </p>
            </div>
          </section>

          {/* The Safety Blind Spot */}
          <section id="safety-blind-spot" className="scroll-mt-24 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">The Safety Blind Spot: Low Concern Where Risk Is High</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h3 className="font-display font-bold text-teal-700 mb-4">What Teens DO Worry About</h3>
                <div className="space-y-3">
                  {data.safetyBlindSpot.doWorryAbout.map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-sm text-navy/80">&quot;{item.label}&quot;</span>
                      <span className="text-sm font-bold text-teal-700">{item.score}/5</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                <h3 className="font-display font-bold text-red-500 mb-4">What Teens DON&apos;T Worry About</h3>
                <div className="space-y-3">
                  {data.safetyBlindSpot.dontWorryAbout.map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-sm text-navy/80">&quot;{item.label}&quot;</span>
                      <span className="text-sm font-bold text-red-500">{item.score}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-navy text-white rounded-xl p-6">
              <p className="font-display font-bold text-amber-400 mb-2">Why This Matters:</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Teens are focused on academic performance risks — they&apos;re worried about their grades, not their safety.
                But the risks they&apos;re least concerned about — scams, grooming, data exploitation — are precisely
                the ones where they&apos;re most vulnerable. Only 50% of teens report that a parent has ever talked
                to them about AI safety. Social media is where most teens learn about AI, outpacing both school and parents.
              </p>
            </div>
          </section>

          {/* Risk Sections */}
          <RiskSection
            id="performance"
            title="Performance Risks"
            items={data.riskPerception.performance.items}
            frequent={data.riskPerception.performance.byUsage.frequent}
            nonFrequent={data.riskPerception.performance.byUsage.nonFrequent}
          />
          <RiskSection
            id="privacy"
            title="Privacy & Cybersecurity Risks"
            items={data.riskPerception.privacy.items}
            frequent={data.riskPerception.privacy.byUsage.frequent}
            nonFrequent={data.riskPerception.privacy.byUsage.nonFrequent}
          />
          <RiskSection
            id="misinformation"
            title="Misinformation Risks"
            items={data.riskPerception.misinformation.items}
            frequent={data.riskPerception.misinformation.byUsage.frequent}
            nonFrequent={data.riskPerception.misinformation.byUsage.nonFrequent}
          />
          <RiskSection
            id="social-psychological"
            title="Social & Psychological Risks"
            items={data.riskPerception.socialPsychological.items}
            frequent={data.riskPerception.socialPsychological.byUsage.frequent}
            nonFrequent={data.riskPerception.socialPsychological.byUsage.nonFrequent}
          />

          {/* Where Teens Learn About AI */}
          <section id="ai-education" className="scroll-mt-24 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              Social Media Is Their #1 AI Teacher
            </h2>

            <ChartWrapper title="Where Teens Learn About AI (number of respondents)" height={350}>
              <BarChart data={data.usageData.aiLearningSources} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="label" width={120} tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [value, 'Respondents']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
                  {data.usageData.aiLearningSources.map((_, i) => (
                    <Cell key={i} fill={[RED, BLUE, TEAL, ORANGE, PURPLE][i]} />
                  ))}
                </Bar>
              </BarChart>
            </ChartWrapper>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                <p className="text-sm text-navy/80 leading-relaxed">
                  <strong>Parents rank LAST</strong> as an AI information source.
                  Only 43% of parents have discussed AI safety with their teen.
                  This is a critical gap that educators and youth workers can help fill.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-display font-bold text-navy mb-3">Teens Still Value Human Guidance</h3>
                <div className="space-y-3">
                  <div className="bg-teal-50 rounded-lg p-4">
                    <p className="text-xs text-teal-700 mb-1">&quot;{data.trustAndOpenness.trustAIFeedback.description}&quot;</p>
                    <p className="text-2xl font-bold text-teal-600">{data.trustAndOpenness.trustAIFeedback.score} / 5</p>
                    <p className="text-xs text-navy/50">{data.trustAndOpenness.trustAIFeedback.disagreePercent}% disagree — they prefer teacher feedback</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-xs text-amber-700 mb-1">&quot;{data.trustAndOpenness.openToAIInLearning.description}&quot;</p>
                    <p className="text-2xl font-bold text-amber-600">{data.trustAndOpenness.openToAIInLearning.score} / 5</p>
                    <p className="text-xs text-navy/50">{data.trustAndOpenness.openToAIInLearning.agreePercent}% agree — they want AI integrated into learning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
              <p className="font-display font-semibold text-navy mb-2">The Message From Teens:</p>
              <p className="text-lg italic text-navy/70 mb-3">&quot;We don&apos;t want AI to replace you. We want you to help us use it well.&quot;</p>
              <p className="text-sm text-navy/60">
                Teens are asking for guidance, not gatekeeping. They want adults who understand AI and can show
                them how to use it critically — not adults who either ban it or ignore it.
              </p>
            </div>
          </section>

          {/* Equity Gap */}
          <section id="equity-gap" className="scroll-mt-24 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              An Equity Issue: The Public vs. Private School Gap
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-navy/60 font-normal"></th>
                    <th className="text-center p-4 text-blue-600 font-bold">Public Schools</th>
                    <th className="text-center p-4 text-purple-600 font-bold">Private Schools</th>
                  </tr>
                </thead>
                <tbody>
                  {data.equityGap.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 text-sm text-navy/80">{row.metric}</td>
                      <td className="p-4 text-center text-2xl font-bold text-blue-600">{row.public}%</td>
                      <td className="p-4 text-center text-2xl font-bold text-purple-600">{row.private}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-navy text-white rounded-xl p-6 mt-6">
              <p className="text-sm text-white/80 leading-relaxed">
                Public school students use AI more but receive less guidance. Private school students get more
                training and show more caution. Public libraries and community programs can bridge this gap — providing
                the structured AI literacy programming that public school students may not be getting at school.
              </p>
            </div>
          </section>

          {/* Overall */}
          <section id="overall" className="scroll-mt-24 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Overall Risk Perception</h2>

            <ChartWrapper title="Risk Perception by Category: All vs Frequent Users">
              <BarChart data={data.riskPerception.overallByCategory} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [value.toFixed(2), 'Mean Score']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Legend />
                <Bar dataKey="allRespondents" name="All Respondents" fill={ORANGE} radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="frequentUsers" name="Frequent Users" fill={NAVY} radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ChartWrapper>

            {/* Narrative callout */}
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-2xl p-6 mb-8">
              <p className="text-lg font-display font-semibold text-navy mb-2">Key Insight</p>
              <p className="text-navy/80 leading-relaxed">
                The gap between actual risk and perceived risk widens with heavier use. Across all
                four categories, frequent AI users consistently rate risks lower than their
                non-frequent peers — suggesting that habituated use reduces vigilance even when
                vulnerabilities remain.
              </p>
            </div>

            {/* 5 Key Takeaways */}
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="font-display text-2xl font-bold text-center mb-8">5 Key Takeaways</h3>
              <div className="space-y-6">
                {data.keyTakeaways.map((takeaway, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      ['bg-teal-500', 'bg-red-500', 'bg-amber-500', 'bg-purple-500', 'bg-blue-500'][i]
                    }`}>
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display font-bold text-white">{takeaway.title}</p>
                      <p className="text-white/70 text-sm">{takeaway.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
