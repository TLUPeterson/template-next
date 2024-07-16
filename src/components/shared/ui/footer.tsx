import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from './link';
import { siteConfig } from '@/data/config/site.settings';
import { footerLinks } from '@/data/config/footerLinks';
import { Button } from '@/components/shared/ui/button';
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  BoxesIcon,
} from 'lucide-react';
import ActiveLink from './activeLink';

export default function Footer({ className }: { className?: string }) {
  const columnNumber = footerLinks.filter(({ links }) => links.length).length;

  return (
    <footer
      className={cn(
        'mt-auto w-full bg-white backdrop-blur-sm dark:from-slate-700/5 dark:via-slate-700/60 dark:to-slate-700/5',
        className,
      )}
    >
      {/* <div
        className={cn(
          'flex flex-col gap-4 justify-between items-center w-full md:my-10 p-6',
        )}
      >
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 mt-12 w-full p-6 container-wide">
          <div className="w-full flex flex-col gap-4 md:max-w-xs lg:max-w-sm">
            <Link href="/" aria-label={siteConfig.title}>
              <div className="flex items-center gap-3 justify-start">
                <Image
                  src="/static/images/logo.png"
                  alt="Page UI logo"
                  height={40}
                  width={40}
                  className="group-hover:animate-wiggle "
                />

                <div className="hidden text-2xl font-semibold sm:flex h-full">
                  Page UI
                </div>
              </div>
            </Link>

            {typeof siteConfig.title === 'string' ? (
              <div className="text-lg font-semibold h-full">
                {siteConfig.title}
              </div>
            ) : null}

            {siteConfig.description ? (
              <p className="text-sm opacity-70">{siteConfig.description}</p>
            ) : null}

            <p className="text-xs">Copyright © {siteConfig.businessName}</p>
          </div>

          <div
            className={cn(
              'grid md:grid-cols-2 gap-12 items-start mt-6 md:mt-0',
              columnNumber === 3 ? 'md:grid-cols-3' : '',
              columnNumber === 4 ? 'lg:grid-cols-4' : '',
            )}
          >
            {footerLinks
              .filter(({ links }) => links.length)
              .map((column, index) => {
                return (
                  <ul
                    key={index}
                    className={cn(
                      'flex flex-col flex-wrap gap-4 justify-center w-full text-xs',
                    )}
                  >
                    {column.columnName ? (
                      <li>
                        <p className="text-slate-900 dark:text-slate-100 font-light text-base">
                          {column.columnName}
                        </p>
                      </li>
                    ) : null}

                    {column.links.map((link, index) => {
                      if (!link.href) {
                        return null;
                      }

                      if (link.href.endsWith('shipixen.com')) {
                        return (
                          <li key={index}>
                            <a
                              href={link.href}
                              className={'nav-link'}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="bg-clip-text bg-gradient-to-r text-transparent from-primary-400 to-secondary-300">
                                {link.title}
                              </span>
                            </a>
                          </li>
                        );
                      }

                      return (
                        <li key={index}>
                          <ActiveLink
                            href={link.href}
                            className={'nav-link'}
                            activeClassName={'nav-link-active'}
                          >
                            <span>{link.title}</span>
                          </ActiveLink>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
          </div>
        </div>
      </div> */}

      <div>
        {/* <hr
          className="w-full my-4 border-0 bg-gradient-to-r from-white/5 via-black/10 to-white/5 dark:from-black/5 dark:via-white/30 darK:to-black/5"
          style={{ height: '1px' }}
        /> */}

        <div className="py-4 px-2 flex flex-col items-center">
          <div className="mb-3 flex flex-wrap justify-center gap-4">
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`}>
                <Button variant="ghost" size="icon" aria-label="Email">
                  <MailIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

            {siteConfig.github && (
              <a href={siteConfig.github}>
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <GithubIcon className="w-6 h-6" color='gray' />
                </Button>
              </a>
            )}

            {siteConfig.linkedin && (
              <a href={siteConfig.linkedin}>
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <LinkedinIcon className="w-6 h-6" />
                </Button>
              </a>
            )}

          </div>
          <div className="w-full text-center lg:flex lg:justify-center p-4 mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{`© ${new Date().getFullYear()}`}</span>
            <span>{` • `}</span>
            <Link href={siteConfig.github}>{siteConfig.businessName}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}