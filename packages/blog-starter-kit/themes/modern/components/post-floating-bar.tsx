import * as Tooltip from '@radix-ui/react-tooltip';
import { useEffect, useState } from 'react';
import { MdGTranslate } from "react-icons/md";

import { CommentSVGV2 } from './icons/svgs';
import { kFormatter } from '../utils/image';
import { Separator } from './separator-root';
import PostFloatingBarTooltipWrapper from './post-floating-bar-tooltip-wrapper';
import { PostFullFragment } from '../generated/graphql';
import TocSheet from './toc-sheet';
import PostShareWidget from './post-share-widget';
import Button from './hn-button';
import { dropdownMenu } from '../utils/const/styles';
import { twJoin } from 'tailwind-merge';
import { BiHeart } from 'react-icons/bi';
import { HiSpeakerWave } from "react-icons/hi2";

import {
  Content as DropdownContent,
  Item as DropdownItem,
  Portal as DropdownPortal,
  Root as DropdownRoot,
  Trigger as DropdownTrigger,
} from '@radix-ui/react-dropdown-menu';

function PostFloatingMenu(props: {
  isPublicationPost: boolean;
  post: PostFullFragment;
  shareText: string;
  showPaymentModal?: () => void;
  openComments?: () => void;
  list: any[];
  onDataChange: any;
  postContent: any;
}) {
  const {
    isPublicationPost,
    post,
    shareText,
    showPaymentModal,
    openComments,
    list,
    onDataChange,
    postContent
  } = props;
  console.log(post)
const [isSpeaking, setIsSpeaking] = useState(false)
  const handleFloatingBarDisplay = () => {
    const blogHeader = document.querySelector<HTMLDivElement>('.blog-header');
    const blogContent = document.querySelector('#post-content-parent');
    const floatingBar = document.querySelector('.post-floating-bar');

    if (!floatingBar?.classList.contains('freeze')) {
      // Check if the scroll position is greater than the blogHeader height
      const isScrollPastHeader = window.scrollY > (blogHeader?.clientHeight || 0);

      if (isScrollPastHeader) {
        // Add active class and animation only if not already active
        if (!floatingBar?.classList.contains('active')) {
          floatingBar?.classList.add('active', 'animation');
        }
      } else {
        // Remove active class if not past the header
        floatingBar?.classList.remove('active');
      }
    }

    const currentViewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // Adding 40 as a buffer to adjust the trigger
    const isPostContentBottomInsideViewport = blogContent!.getBoundingClientRect().bottom + 40 <= currentViewportHeight;
    // Adding 175 as a buffer to adjust the trigger
    const isPostContentBottomAlmostOut =
      window.scrollY + currentViewportHeight - 175 >= blogContent!.clientHeight &&
      floatingBar?.classList.contains('freeze');

    if (isPostContentBottomInsideViewport) {
      // Remove active class and add freeze class when the content is fully visible
      floatingBar?.classList.remove('active');
      floatingBar?.classList.add('freeze');
    } else if (isPostContentBottomAlmostOut) {
      // Remove freeze class and add active class when content is almost out of view
      floatingBar?.classList.remove('freeze', 'animation');
      floatingBar?.classList.add('active');
    }
  };

  const languages = [
    {
      short: "en",
      fullForm: "English"
    },
    {
      short: "te",
      fullForm: "Telugu"
    },
    {
      short: "hi",
      fullForm: "Hindi"
    },
    {
      short: "fr",
      fullForm: "French"
    },
    {
      short: "es",
      fullForm: "Spanish"
    },
    {
      short: "ru",
      fullForm: "Russian"
    },
    {
      short: "zh-CN",
      fullForm: "Chinese"
    },
  ]
  async function readTheBlog() {
    if (!isSpeaking) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(postContent, 'text/html');
      const paragraphs = Array.from(doc.body.children);
  
      // Retrieve voices asynchronously after checking for speech
      const voices = await getVoicesAsync();
      console.log(voices, "VVVV")
  
      const translatedPromises = paragraphs.map((paragraph) => {
        if (paragraph.tagName === 'PRE' || paragraph.tagName === 'CODE') {
          return Promise.resolve(paragraph.innerHTML);
        }
  
        const textContent = paragraph.textContent;
  
        return new Promise((resolve) => {
          const options = {
            pitch: 5, // Set the desired pitch
            text: textContent,
            voice: voices.find((voice) => {
              const matches = (voice.name === 'Microsoft Zira - English (United States)' || voice.name === "Google UK English Female") &&
                (voice.lang === 'en-US' || voice.lang === 'en-GB') &&
                voice.localService;
              console.log(voice, matches); // Log each voice and its matching status
              return matches;
            }),
          };    console.log(options.voice); // Log the selected voice

  
          // Ensure voice is found before speaking
          if (options.voice) {
            speak(options, resolve);
          } else {
            console.error('Desired female voice not found.');
            resolve(textContent); // Resolve without speaking
          }
        });
      });
  
      Promise.all(translatedPromises).then(() => {
        setIsSpeaking(false);
      });
  
      setIsSpeaking(true);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }
  
  async function getVoicesAsync() {
    return new Promise((resolve) => {
      const voices = window.speechSynthesis.getVoices();
  
      if (voices.length > 0) {
        resolve(voices);
      } else {
        window.speechSynthesis.onvoiceschanged = resolve; // Resolve directly with voices when available
      }
    });
  }
  
  function speak(options, resolve) {
    const utterance = new SpeechSynthesisUtterance();
  
    utterance.onend = () => {
      resolve(options.text); // Resolve the promise once speech is completed
    };
    utterance.onboundary = (event) => {
      // Handle boundary events if needed
    };
  
    utterance.pitch = options.pitch;
    utterance.text = options.text;
    utterance.voice = options.voice;
  
    window.speechSynthesis.speak(utterance);
  }
  function translate(inputLanguage: string, outputLanguage: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(postContent, 'text/html');
    const paragraphs = Array.from(doc.body.children);

    const translatedPromises = paragraphs.map((paragraph) => {
      if (paragraph.tagName === 'PRE' || paragraph.tagName === 'CODE') {
        return Promise.resolve(paragraph.innerHTML);
      }

      const textContent = paragraph.textContent;
      // @ts-ignore
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(textContent)}`;

      return fetch(url)
        .then((response) => response.json())
        .then((json) => json[0].map((item: string) => item[0]).join(""))
        .catch((error) => {
          console.log(error);
          return ''; // Return an empty string in case of an error
        });
    });

    Promise.all(translatedPromises)
      .then((translatedChunks) => {
        paragraphs.forEach((paragraph, index) => {
          if (!(paragraph.tagName === 'PRE' || paragraph.tagName === 'CODE')) {
            paragraph.textContent = translatedChunks[index];
          }
        });

        const translatedContent = doc.body.innerHTML;
        onDataChange(translatedContent);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    handleFloatingBarDisplay();
    window.addEventListener('scroll', handleFloatingBarDisplay);
    return () => {
      window.removeEventListener('scroll', handleFloatingBarDisplay);
    };
  }, []);

  // Best practice to have the accessible name being with the visible text (comment count)
  const commentBtnAccessibleLabel =
    post?.responseCount > 0
      ? `${kFormatter(post.responseCount + (post.replyCount || 0))} comment${post.responseCount === 1 ? '' : 's'
      }, open the comments`
      : 'Open comments';

  return (
    <Tooltip.Provider delayDuration={200}>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `.post-floating-bar {
              bottom: -60px;
            }
            .post-floating-bar.animation {
              -webkit-transition: .2s all;
              -o-transition: .2s all;
              transition: .2s all;
              transition-timing-function: ease-in;
            }
            .post-floating-bar.active {
              bottom: 40px
            }
            .post-floating-bar.freeze {
              bottom: 0!important;
              position: absolute!important;
              transition: none!important;
            }
            .post-floating-bar.freeze > div {
              box-shadow: none!important;
            }
            `,
        }}
      />
      <div className="post-floating-bar fixed left-0 right-0 z-50 flex h-12 w-full flex-wrap justify-center 2xl:h-14">
        <div className="relative mx-auto flex h-12 shrink flex-wrap items-center justify-center rounded-full border-1/2 border-slate-200 bg-white px-5 py-1 text-sm  text-slate-800 shadow-xl dark:border-slate-500 dark:bg-slate-700 dark:text-slate-50 2xl:h-14">
          <PostFloatingBarTooltipWrapper label="Write a comment">
            {post && (
              <>
                <div>
                  <button
                    type="button"
                    onClick={openComments}
                    aria-label={commentBtnAccessibleLabel}
                    className="outline-none! flex cursor-pointer items-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <>
                      <span className="rounded-full p-2">
                        <CommentSVGV2 className="h-4 w-4 stroke-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
                      </span>
                      {post?.responseCount !== 0 ? <span className="ml-0.5 pr-2">{kFormatter(post.reactionCount)}</span> : <span className="ml-0.5 pr-2">0</span>}

                    </>
                  </button>
                </div></>
            )}
          </PostFloatingBarTooltipWrapper>

          <Separator className="mx-2 h-5" />

          {post && (
            <>
              <TocSheet list={list} />
              <Separator className="mx-2 h-5" />
              {/* <PostShareWidget post={post} shareText={shareText} /> */}
              {/* <Separator className="mx-2 h-5" /> */}
              <div>
                <button
                  type="button"
                  onClick={readTheBlog}
                  className="outline-none! flex cursor-pointer items-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <>
                    <span className="rounded-full p-2">
                      <HiSpeakerWave className="h-4 w-4 stroke-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
                    </span>
                  </>
                </button>
              </div>
              <Separator className="mx-2 h-5" />
              <div>
                <button
                  type="button"
                  className="outline-none! flex cursor-pointer items-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <>
                    <span className="rounded-full p-2">
                      <BiHeart className="h-4 w-4 stroke-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
                    </span>
                    {post?.reactionCount !== 0 ? <span className="ml-0.5 pr-2">{kFormatter(post.reactionCount)}</span> : <span className="ml-0.5 pr-2">0</span>}
                  </>
                </button>
              </div>
              <Separator className="mx-2 h-5" />

              <div>
                <button
                  type="button"
                  className="outline-none! flex cursor-pointer items-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >

                  <DropdownRoot >
                    <PostFloatingBarTooltipWrapper label="Share this article">
                      <DropdownTrigger
                        aria-label="Share this article"
                        className="outline-none! cursor-pointer rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <MdGTranslate className="h-4 w-4 stroke-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
                      </DropdownTrigger>
                    </PostFloatingBarTooltipWrapper>
                    <DropdownPortal>
                      <DropdownContent
                        sideOffset={16}
                        className="z-50 w-40 rounded-xl border border-slate-200 bg-white px-1 py-2 text-sm font-semibold text-slate-700 shadow-xl dark:border-slate-700 dark:bg-slate-700 dark:text-slate-50"
                      >

                        {
                          languages.map((item, index) => {
                            return (
                              <DropdownItem key={index} className="outline-none!" asChild>
                                <Button
                                  variant="transparent"
                                  className={twJoin(
                                    dropdownMenu,
                                    'flex flex-wrap rounded px-2 text-sm font-normal dark:hover:bg-slate-800',
                                  )}
                                  onClick={() => translate("auto", item.short)}
                                  aria-label={`Copy ${post ? 'article permalink' : 'draft link'}`}
                                >
                                  <span className="px-2 font-normal text-slate-700 dark:text-slate-100">
                                    {item.fullForm}
                                  </span>
                                </Button>
                              </DropdownItem>
                            )
                          })
                        }
                      </DropdownContent>
                    </DropdownPortal>
                  </DropdownRoot>
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </Tooltip.Provider>
  );
}

export default PostFloatingMenu;
