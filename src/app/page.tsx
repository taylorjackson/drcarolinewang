import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { UserPlusIcon, HeartIcon, TrophyIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import headshot from '@/images/headshot.jpg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function UserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          {endDate ? <span aria-hidden="true">—</span> : <span></span>}{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    // Education
    {
      company: 'MD',
      title: 'University of British Columbia',
      logo: logoPlanetaria,
      start: '1984',
      end: '',
    },
    {
      company: 'Master of Public Administration',
      title: 'New York University',
      logo: logoPlanetaria,
      start: '2014',
      end: '',
    },
    // Medical Practice
    {
      company: 'BC Family Physician (full service)',
      title:
        'Vancouver, Richmond; Active staff Richmond Hospital for over 20 years',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
    // Medical Leadership (Elected)
    {
      company: 'President',
      title: 'Vancouver Medical Association',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
    {
      company: 'Board District Delegate; Executive Committee',
      title: 'British Columbia Medical Association',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
    {
      company: 'Honorary Secretary Treasurer',
      title: 'BCMA / DoBC',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
    {
      company: 'Chair, Area Medical Advisory Committee',
      title: 'Richmond Health Services; Member VCH HAMAC',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
    // Community Leadership
    {
      company: 'Founding President',
      title: 'Association of Chinese Canadian Professionals BC',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
    {
      company: 'President',
      title: 'Chinese-Canadian Medical Society (CCMS) BC',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
    {
      company: 'Founder',
      title: 'Coalition for Better Health Care',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
    {
      company: 'Co-Chair, Health Fair',
      title: 'SUCCESS, CCMS',
      logo: logoPlanetaria,
      start: '',
      end: '',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/CVDrCarolineWang.pdf"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto">
                Dr. Caroline Y. Wang
                <div className="sm:text-2xl">
                  MLA Candidate for Vancouver-Quilchena
                </div>
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  I am running for MLA for Vancouver-Quilchena as an Independent
                  candidate to bring strong representation and to give voters a
                  centrist option in this crucial election.
                  <br />
                  <br />
                  As a BC doctor of 38 years in family practice with extensive
                  public leadership experience, I want to use my knowledge to
                  benefit the constituents and address serious challenges,
                  especially the health care crisis affecting our communities.
                  With my academic training from New York University studying
                  international health systems, policy and management, I wish to
                  help the Government to improve the public system to achieve
                  high impact saving lives and better health outcomes for
                  British Columbians.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#priorities"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <Image
                src={headshot}
                alt="Dr. Caroline Y. Wang"
                className="mt-10 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </Container>
      <Container className="mt-10">
        <div className="bg-white sm:pb-4 sm:pt-4 xl:pb-12">
          <div className="border-b border-t border-gray-900/10 bg-white xl:pb-0">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
              <div className="w-full max-w-2xl py-24 xl:max-w-none xl:flex-auto xl:px-16">
                <figure className="relative isolate pt-6 sm:pt-12">
                  <svg
                    viewBox="0 0 162 128"
                    fill="none"
                    aria-hidden="true"
                    className="absolute left-0 top-0 -z-10 h-32 stroke-black/20"
                  >
                    <path
                      id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    />
                    <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                  </svg>
                  <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>
                      My vision is to make BC healthy again by honoring our
                      values as a caring society based on fiscal and social
                      responsibility that help people and families to live happy
                      and productive lives.
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 text-base">
                    <div className="font-semibold text-gray-900">
                      Dr. Caroline Y. Wang, MD, MPA
                    </div>
                    <div className="mt-1 text-gray-400">
                      MLA Candidate for Vancouver-Quilchena
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container id="priorities">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 py-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10 ">
            <div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-xl font-bold leading-7 text-indigo-600">
                    My Goals and Priorities
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    {/* First Main Point */}
                    <li className="flex gap-x-3">
                      <UserPlusIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Fix health care
                        </strong>
                        , ensure high quality care for all, especially seniors
                        and vulnerable people; promote health-in-all policies.
                        <ul role="list" className="divide-y divide-gray-100">
                          {/* Sub-points */}
                          <li className="flex gap-x-4 py-5">
                            <div className="flex-auto">
                              <div className="flex items-baseline justify-between gap-x-4">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  Quality
                                </p>
                              </div>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Safe, effective, efficient, timely access,
                                equity
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-x-4 py-5">
                            <div className="flex-auto">
                              <div className="flex items-baseline justify-between gap-x-4">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  Family doctors providing holistic care
                                </p>
                              </div>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                First contact, continuous, comprehensive,
                                coordinated care
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-x-4 py-5">
                            <div className="flex-auto">
                              <div className="flex items-baseline justify-between gap-x-4">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  Specialty and diagnostic services
                                </p>
                              </div>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Mental health and community services
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-x-4 py-5">
                            <div className="flex-auto">
                              <div className="flex items-baseline justify-between gap-x-4">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  Public system guarantee
                                </p>
                              </div>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Urgent 24/7 care, ambulances, Emergency and
                                hospital care
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-x-4 py-5">
                            <div className="flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">
                                Homecare, long-term care, rehabilitation
                              </p>
                            </div>
                          </li>
                          <li className="flex gap-x-4 py-5">
                            <div className="flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">
                                Respect for patients and all health providers
                              </p>
                            </div>
                          </li>
                        </ul>
                      </span>
                    </li>
                    {/* Second Main Point */}
                    <li className="flex gap-x-3">
                      <HeartIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Cut administrative costs and waste
                        </strong>
                      </span>
                    </li>
                    {/* Third Main Point */}
                    <li className="flex gap-x-3">
                      <TrophyIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Culture of excellence
                        </strong>
                        , with evidence-based policies, transparency, and
                        accountability for results.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* The right side of the component remains the same */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
        <div className="rounded-2xl border-2 border-zinc-100 bg-white dark:border-zinc-700/40">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:flex lg:flex-col lg:items-center lg:justify-between lg:px-8">
            <h2 className="pb-10 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl md:px-12 lg:px-20">
              I hope to earn your vote for the opportunity to work for good
              government in BC, using my lifetime of knowledge as a professional
              and trusted leader to serve the constituents of
              Vancouver-Quilchena. Together we can build a strong legacy for our
              future.
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="/contact"
                className="text-lg font-semibold leading-6 text-gray-900"
              >
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
