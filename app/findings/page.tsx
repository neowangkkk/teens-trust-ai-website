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

const sections = [
  { id: 'usage', label: 'AI Usage Patterns' },
  { id: 'performance', label: 'Performance Risks' },
  { id: 'privacy', label: 'Privacy & Cybersecurity' },
  { id: 'misinformation', label: 'Misinformation Risks' },
  { id: 'social-psychological', label: 'Social & Psychological' },
  { id: 'overall', label: 'Overall Risk Perception' },
]

const PIE_COLORS = [ORANGE, ORANGE_LIGHT, GRAY]

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
          risks. Explore the findings across AI usage patterns and four risk categories.
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
          </section>
        </div>
      </div>
    </div>
  )
}
