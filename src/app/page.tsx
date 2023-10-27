import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { UserPlusIcon, HeartIcon, TrophyIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

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

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
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
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'BCMA/DoBC',
      title: 'Board Delegate',
      logo: logoPlanetaria,
      start: '1998',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'BC Caucus',
      title: 'CMA General Council',
      logo: logoPlanetaria,
      start: '2002',
      end: '2007',
    },
    {
      company: 'BC Caucus',
      title: 'CMA General Council',
      logo: logoPlanetaria,
      start: '2002',
      end: '2007',
    },
    {
      company: 'BC Caucus',
      title: 'CMA General Council',
      logo: logoPlanetaria,
      start: '2002',
      end: '2007',
    },
    {
      company: 'BC Caucus',
      title: 'CMA General Council',
      logo: logoPlanetaria,
      start: '2002',
      end: '2007',
    },
    {
      company: 'BC Caucus',
      title: 'CMA General Council',
      logo: logoPlanetaria,
      start: '2002',
      end: '2007',
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
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

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
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Dr. Caroline Y. Wang
                <div className="sm:text-4xl">MD, MPA</div>
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  I am committed to serve our profession and bring diverse,
                  extensive knowledge as a well-known leader with decades of
                  experience in organized medicine, grassroots advocacy, in
                  senior administration, and with rigorous academic training in
                  health policy, strategy and governance to benefit all the
                  doctors in BC.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <img
                src="https://images.pixieset.com/88527856/f8f5d96d98d3f1c83bfd37c18b421456-xxlarge.jpg"
                alt=""
                className="mt-10 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </Container>
      <Container className="mt-16 md:mt-20 ">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 border-t border-gray-900/10 py-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10 ">
            <div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    Vote for
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    A trusted physician advocate
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    At this critical time for our profession in a worsening
                    health care crisis, we need the most experienced, trusted
                    leaders in Doctors of BC working at the helm to serve all
                    frontline physicians at the coalface in the trenches
                    delivering patient care.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8 lg:py-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p>
                    Together, we can lead health care reform in BC with real
                    solutions and action to achieve our common goals - healthy
                    doctors, supported and valued to deliver best care for all.
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <UserPlusIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Leadership.
                        </strong>{' '}
                        Prioritize fair compensation negotiations for all
                        doctors, support physician autonomy in practice choices,
                        and uphold transparency and accountability towards our
                        members on outcomes.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <HeartIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Unity.
                        </strong>{' '}
                        Support MDs at every career stage, advocate for
                        equitable payment models for all doctors, and foster
                        collegiality to ensure no doctor is left behind.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <TrophyIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Quality.
                        </strong>{' '}
                        Push for evidence-based policy reforms for holistic
                        care, tackle systemic burnout causes, and allocate
                        resources to enhance access, reduce waste, and lower
                        costs.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-white dark:border-zinc-700/40">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Do you wish to get in touch?
              <br />
              Don't hesitate.
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
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
      <Container>
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                <dl className="space-y-16 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                  <div>
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      Who am I?
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      I am Dr. Caroline Y. Wang, a devoted advocate for the
                      medical profession with a rich educational background
                      including an MD from UBC in 1984, a Master of Public
                      Administration from NYU Wagner in 2014, and a leadership
                      certificate from Harvard Chan School of Public Health in
                      2019. My medical journey began in Vancouver/Richmond,
                      where I've been serving as a Family Physician since 1985,
                      extending full-service and locum care. <br />
                      <br />
                      I've had the privilege of being an elected BCMA Board
                      member for ten years, representing a broad spectrum of
                      physicians. My tenure included being a District 8 delegate
                      for Richmond/Delta for nine years and serving as the
                      Honorary Secretary-Treasurer during 2007-08. I was also
                      part of the CMA General Council, BC Caucus from 2003-07,
                      and held senior administration roles including the Chair
                      of the Area Medical Advisory Committee at Richmond Health
                      Services.
                      <br />
                      <br />
                      I've led the Vancouver Medical Association as its
                      President from 2000-02 and was an Executive Committee
                      member until 2010. My dedication to multicultural
                      inclusivity in healthcare was further displayed as the
                      President of the Chinese Canadian Medical Society during
                      1996-97 and as a Board member till 1998, along with my
                      service in the Federation of Chinese Medical Societies
                      from 1996-03. <br />
                      <br />
                      I founded the Association of Chinese Canadian
                      Professionals BC in 1999 and led it as President till
                      2003, exhibiting my resolve to foster a diverse and
                      inclusive professional community. In 2017, I founded the
                      Coalition for Better Health Care, aimed at enhancing
                      healthcare services. <br />
                      <br />
                      My extensive experience, complemented by a rich academic
                      background, fuels my vision of a collaborative and
                      equitable healthcare landscape in BC, striving for a
                      positive change in our healthcare system and the practice
                      of medicine.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col pt-10 sm:pt-16 lg:pl-8 lg:pt-0 xl:pl-20">
                <dl className="space-y-16 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                  <div>
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      What have I done?
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      My journey has always been driven by a pledge to uphold
                      integrity and exhibit courage to ensure the right actions
                      are taken for the welfare of our medical community. In
                      November 1998, I orchestrated a Public Forum alongside
                      Richmond doctors, a decisive move that played a pivotal
                      role in preserving vital surgical services at Richmond
                      Hospital, averting a planned closure as outlined in the
                      ROARS Report. <br />
                      <br />
                      My tenure as a BCMA board member from 2006 to 2008 was
                      marked by relentless advocacy for transparency and
                      accountability within the board. I proposed the creation
                      of a Forms Committee during 2007-08 to mitigate
                      administrative burdens, ensuring that members' rights to
                      be fully informed were upheld, especially during the
                      ratification of negotiated contracts as seen in the GPSC
                      proposal of 2005. My efforts were rooted in maintaining
                      the fiduciary duty of the board to the members, promoting
                      open communication, and ensuring the right to due process
                      - all to ensure our colleagues are treated with fairness,
                      justice, and dignity. <br />
                      <br />
                      In 2003, I spearheaded a significant proposal to Vancouver
                      Coastal Health (VCH) for Primary Health Care Transition
                      Fund (PHCTF) primary care funding. This initiative was
                      aimed at bolstering a Family Practice Network for a
                      Continuous Care Collaborative and an Urgent Care Center in
                      Richmond, marking a stride towards enhanced primary care
                      services and community health resources. My endeavors
                      reflect a long-standing commitment to fostering a
                      collaborative environment, reducing bureaucratic hurdles,
                      and making impactful strides towards better healthcare
                      systems.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Container>
        <div className="bg-white pb-4 pt-4 sm:pb-8 sm:pt-8 xl:pb-12">
          <div className="bg-white pb-20 sm:pb-24 xl:pb-0">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
              <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
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
                      Dr. Caroline Y. Wang is truly the best person to work with
                      and has unlimited energy to tackle all of the worlds
                      problems.
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 text-base">
                    <div className="font-semibold text-gray-900">
                      Judith Black
                    </div>
                    <div className="mt-1 text-gray-400">CEO of Workcation</div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
