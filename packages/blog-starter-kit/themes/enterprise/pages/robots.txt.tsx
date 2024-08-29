import { type GetServerSideProps } from 'next';

const RobotsTxt = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;
  const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
  if (!host) {
    throw new Error('Could not determine host');
  }

  const sitemapUrl = `https://${host}/sitemap.xml`;
  const robotsTxt = `
# www.robotstxt.org/

# Allow crawling of all content
User-agent: *
Allow: /

# Disallow admin and private pages
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Google adsbot ignores robots.txt unless specifically named!
User-agent: AdsBot-Google
Allow: /

# Block AI crawlers
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: Google-Extended
User-agent: CCBot
User-agent: anthropic-ai
User-agent: HTTrack
User-agent: 360Spider
User-agent: 80legs
User-agent: Abonti
User-agent: Aboundex
User-agent: Acunetix
User-agent: ADmantX
User-agent: AhrefsBot
User-agent: AIBOT
User-agent: AiHitBot
User-agent: Aipbot
User-agent: Alexibot
User-agent: Alligator
User-agent: AllSubmitter
User-agent: Anarchie
User-agent: Apexoo
User-agent: ASPSeek
User-agent: Asterias
User-agent: Attach
User-agent: autoemailspider
User-agent: BackDoorBot
User-agent: Backlink-Ceck
User-agent: backlink-check
User-agent: BacklinkCrawler
User-agent: BackStreet
User-agent: BackWeb
User-agent: Badass
User-agent: Bandit
User-agent: Barkrowler
User-agent: BatchFTP
User-agent: Battleztar Bazinga
User-agent: BBBike
User-agent: BDFetch
User-agent: BetaBot
User-agent: Bigfoot
User-agent: Bitacle
User-agent: Blackboard
User-agent: Black Hole
User-agent: BlackWidow
User-agent: BLEXBot
User-agent: Blow
User-agent: BlowFish
User-agent: Boardreader
User-agent: Bolt
User-agent: BotALot
User-agent: Brandprotect
User-agent: BrandProtect
User-agent: Brandwatch
User-agent: Bubing
User-agent: Buddy
User-agent: BuiltBotTough
User-agent: BuiltWith
User-agent: Bullseye
User-agent: BunnySlippers
User-agent: BuzzSumo
User-agent: Calculon
User-agent: CATExplorador
User-agent: CazoodleBot
User-agent: CCBot
User-agent: Cegbfeieh
User-agent: CheeseBot
User-agent: CherryPicker
User-agent: ChinaClaw
User-agent: Chlooe
User-agent: Claritybot
User-agent: Cliqzbot
User-agent: Cogentbot
User-agent: cognitiveseo
User-agent: Collector
User-agent: com.plumanalytics
User-agent: Copier
User-agent: CopyRightCheck
User-agent: Copyscape
User-agent: Cosmos
User-agent: Craftbot
User-agent: CrazyWebCrawler
User-agent: CRAZYWEBCRAWLER
User-agent: Crescent
User-agent: CSHttp
User-agent: Curious
User-agent: Custo
User-agent: DatabaseDriverMysqli
User-agent: DataCha0s
User-agent: DBLBot
User-agent: demandbase-bot
User-agent: Demon
User-agent: Deusu
User-agent: Devil
User-agent: Digincore
User-agent: DIIbot
User-agent: Dirbuster
User-agent: Disco
User-agent: Discobot
User-agent: Discoverybot
User-agent: DittoSpyder
User-agent: DomainAppender
User-agent: DomainCrawler
User-agent: DomainSigmaCrawler
User-agent: DomainStatsBot
User-agent: Dotbot
User-agent: Download\ Demon
User-agent: Download\ Devil
User-agent: Download\ Wonder
User-agent: Dragonfly
User-agent: Drip
User-agent: DTS\ Agent
User-agent: EasyDL
User-agent: Ebingbong
User-agent: eCatch
User-agent: ECCP/1.0
User-agent: Ecxi
User-agent: EirGrabber
User-agent: EMail\ Collector
User-agent: EMail\ Extractor
User-agent: EMail\ Siphon
User-agent: EMail\ Wolf
User-agent: EroCrawler
User-agent: Evil
User-agent: Exabot
User-agent: Express\ WebPictures
User-agent: Extractor
User-agent: ExtractorPro
User-agent: Extreme\ Picture\ Finder
User-agent: EyeNetIE
User-agent: Ezooms
User-agent: FDM
User-agent: FHscan
User-agent: Fimap
User-agent: Firefox/7.0
User-agent: FlashGet
User-agent: Flunky
User-agent: Foobot
User-agent: fq
User-agent: Freeuploader
User-agent: FrontPage
User-agent: Fyrebot
User-agent: GalaxyBot
User-agent: Genieo
User-agent: GermCrawler
User-agent: Getintent
User-agent: GetRight
User-agent: GetWeb
User-agent: Gigablast
User-agent: Gigabot
User-agent: G-i-g-a-b-o-t
User-agent: G\-i\-g\-a\-b\-o\-t
User-agent: Go-Ahead-Got-It
User-agent: Gotit
User-agent: GoZilla
User-agent: Go!Zilla
User-agent: Grabber
User-agent: GrabNet
User-agent: Grafula
User-agent: GrapeFX
User-agent: GrapeshotCrawler
User-agent: GridBot
User-agent: GT::WWW
User-agent: HaosouSpider
User-agent: Harvest
User-agent: Havij
User-agent: HEADMasterSEO
User-agent: Heritrix
User-agent: Hloader
User-agent: HMView
User-agent: HTMLparser
User-agent: HTTP::Lite
User-agent: HTTrack
User-agent: Humanlinks
User-agent: HybridBot
User-agent: Iblog
User-agent: IDBot
User-agent: Id-search
User-agent: IlseBot
User-agent: Image\ Fetch
User-agent: Image\ Stripper
User-agent: Image\ Sucker
User-agent: Indy\ Library
User-agent: InfoNaviRobot
User-agent: InfoTekies
User-agent: instabid
User-agent: Intelliseek
User-agent: InterGET
User-agent: Internet\ Ninja
User-agent: InternetSeer
User-agent: internetVista\ monitor
User-agent: Iria
User-agent: IRLbot
User-agent: Iskanie
User-agent: JamesBOT
User-agent: Jbrofuzz
User-agent: JennyBot
User-agent: JetCar
User-agent: JikeSpider
User-agent: JOC\ Web\ Spider
User-agent: Joomla
User-agent: Jorgee
User-agent: JustView
User-agent: Jyxobot
User-agent: Kenjin\ Spider
User-agent: Keyword\ Density
User-agent: Kozmosbot
User-agent: Lanshanbot
User-agent: Larbin
User-agent: LeechFTP
User-agent: LeechGet
User-agent: LexiBot
User-agent: Lftp
User-agent: LibWeb
User-agent: Libwhisker
User-agent: Lightspeedsystems
User-agent: Likse
User-agent: Linkdexbot
User-agent: LinkextractorPro
User-agent: LinkpadBot
User-agent: LinkScan
User-agent: LinksManager
User-agent: LinkWalker
User-agent: LinqiaMetadataDownloaderBot
User-agent: LinqiaRSSBot
User-agent: LinqiaScrapeBot
User-agent: Lipperhey
User-agent: Litemage_walker
User-agent: Lmspider
User-agent: LNSpiderguy
User-agent: Ltx71
User-agent: lwp-request
User-agent: LWP::Simple
User-agent: lwp-trivial
User-agent: Magnet
User-agent: Mag-Net
User-agent: magpie-crawler
User-agent: Mail.ru
User-agent: Majestic12
User-agent: MarkMonitor
User-agent: MarkWatch
User-agent: Masscan
User-agent: Mass\ Downloader
User-agent: Mata\ Hari
User-agent: Meanpathbot
User-agent: mediawords
User-agent: MegaIndex.ru
User-agent: Metauri
User-agent: MFC_Tear_Sample
User-agent: Microsoft\ Data\ Access
User-agent: Microsoft\ URL\ Control
User-agent: MIDown\ tool
User-agent: MIIxpc
User-agent: Mister\ PiX
User-agent: MJ12bot
User-agent: Mojeek
User-agent: Morfeus\ Fucking\ Scanner
User-agent: MSFrontPage
User-agent: MSIE\ 6.0
User-agent: MSIECrawler
User-agent: Msrabot
User-agent: MS\ Web\ Services\ Client\ Protocol
User-agent: Musobot
User-agent: Name\ Intelligence
User-agent: Nameprotect
User-agent: Navroad
User-agent: NearSite
User-agent: Needle
User-agent: Nessus
User-agent: NetAnts
User-agent: Netcraft
User-agent: netEstate\ NE\ Crawler
User-agent: NetLyzer
User-agent: NetMechanic
User-agent: NetSpider
User-agent: Nettrack
User-agent: Net\ Vampire
User-agent: Netvibes
User-agent: NetZIP
User-agent: NextGenSearchBot
User-agent: Nibbler
User-agent: NICErsPRO
User-agent: Niki-bot
User-agent: Nikto
User-agent: NimbleCrawler
User-agent: Ninja
User-agent: Nmap
User-agent: NPbot
User-agent: Nutch
User-agent: Octopus
User-agent: Offline\ Explorer
User-agent: Offline\ Navigator
User-agent: Openfind
User-agent: OpenLinkProfiler
User-agent: Openvas
User-agent: OrangeBot
User-agent: OrangeSpider
User-agent: OutfoxBot
User-agent: PageAnalyzer
User-agent: Page\ Analyzer
User-agent: PageGrabber
User-agent: Page\ Grabber
User-agent: page\ scorer
User-agent: PageScorer
User-agent: Panscient
User-agent: Papa\ Foto
User-agent: Pavuk
User-agent: pcBrowser
User-agent: PECL::HTTP
User-agent: PeoplePal
User-agent: PHPCrawl
User-agent: Picscout
User-agent: Picsearch
User-agent: PictureFinder
User-agent: Pimonster
User-agent: Pi-Monster
User-agent: Pixray
User-agent: PleaseCrawl
User-agent: plumanalytics
User-agent: Pockey
User-agent: POE-Component-Client-HTTP
User-agent: Probethenet
User-agent: ProPowerBot
User-agent: ProWebWalker
User-agent: Proximic
User-agent: Psbot
User-agent: Pump
User-agent: PyCurl
User-agent: QueryN\ Metasearch
User-agent: Qwantify
User-agent: RankActive
User-agent: RankActiveLinkBot
User-agent: RankFlex
User-agent: RankingBot
User-agent: RankingBot2
User-agent: Rankivabot
User-agent: RankurBot
User-agent: RealDownload
User-agent: Reaper
User-agent: RebelMouse
User-agent: Recorder
User-agent: RedesScrapy
User-agent: ReGet
User-agent: RepoMonkey
User-agent: Ripper
User-agent: RocketCrawler
User-agent: Rogerbot
User-agent: SalesIntelligent
User-agent: SBIder
User-agent: ScanAlert
User-agent: Scanbot
User-agent: Scrapy
User-agent: Screaming
User-agent: Screaming\ Frog\ SEO\ Spider
User-agent: ScreenerBot
User-agent: Searchestate
User-agent: SearchmetricsBot
User-agent: Semrush
User-agent: SemrushBot
User-agent: SEOkicks
User-agent: SEOkicks-Robot
User-agent: SEOlyticsCrawler
User-agent: Seomoz
User-agent: SEOprofiler
User-agent: seoscanners
User-agent: SEOstats
User-agent: Siphon
User-agent: SISTRIX
User-agent: SISTRIX\ Crawler
User-agent: Sitebeam
User-agent: SiteExplorer
User-agent: Siteimprove
User-agent: SiteLockSpider
User-agent: SiteSnagger
User-agent: SiteSucker
User-agent: Site\ Sucker
User-agent: Sitevigil
User-agent: Slackbot-LinkExpanding
User-agent: SlySearch
User-agent: SmartDownload
User-agent: Snake
User-agent: Snapbot
User-agent: Snoopy
User-agent: SocialRankIOBot
User-agent: Sogou\ web\ spider
User-agent: Sosospider
User-agent: Sottopop
User-agent: SpaceBison
User-agent: Spammen
User-agent: SpankBot
User-agent: Spanner
User-agent: Spbot
User-agent: Spinn3r
User-agent: SputnikBot
User-agent: Sqlmap
User-agent: Sqlworm
User-agent: Sqworm
User-agent: Steeler
User-agent: Stripper
User-agent: Sucker
User-agent: Sucuri
User-agent: SuperBot
User-agent: SuperHTTP
User-agent: Surfbot
User-agent: SurveyBot
User-agent: Suzuran
User-agent: Swiftbot
User-agent: sysscan
User-agent: Szukacz
User-agent: T0PHackTeam
User-agent: T8Abot
User-agent: tAkeOut
User-agent: Teleport
User-agent: TeleportPro
User-agent: Telesoft
User-agent: Telesphoreo
User-agent: Telesphorep
User-agent: The\ Intraformant
User-agent: TheNomad
User-agent: TightTwatBot
User-agent: Titan
User-agent: Toata
User-agent: Toweyabot
User-agent: Trendictionbot
User-agent: True_Robot
User-agent: Turingos
User-agent: TurnitinBot
User-agent: Turnitin\ Bot
User-agent: Turnitin\ Robot
User-agent: TwengaBot
User-agent: Twice
User-agent: Typhoeus
User-agent: UnisterBot
User-agent: URLy.Warning
User-agent: URLy\ Warning
User-agent: Vacuum
User-agent: Vagabondo
User-agent: VB\ Project
User-agent: VCI
User-agent: VeriCiteCrawler
User-agent: VidibleScraper
User-agent: Virusdie
User-agent: VoidEYE
User-agent: Voil
User-agent: Voltron
User-agent: Wallpapers/3.0
User-agent: WallpapersHD
User-agent: WASALive-Bot
User-agent: WBSearchBot
User-agent: Webalta
User-agent: WebAuto
User-agent: Web\ Auto
User-agent: WebBandit
User-agent: Web\ Bandit
User-agent: WebCollage
User-agent: Web\ Collage
User-agent: WebCopier
User-agent: Web\ Copier
User-agent: WEBDAV
User-agent: WEBDAV\ Client
User-agent: WebEnhancer
User-agent: Web\ Enhancer
User-agent: WebFetch
User-agent: Web\ Fetch
User-agent: WebFuck
User-agent: Web\ Fuck
User-agent: WebGo\ IS
User-agent: WebImageCollector
User-agent: Web\ Image\ Collector
User-agent: WebLeacher
User-agent: WebmasterWorldForumBot
User-agent: webmeup-crawler
User-agent: WebPix
User-agent: Web\ Pix
User-agent: WebReaper
User-agent: Web\ Reaper
User-agent: WebSauger
User-agent: Web\ Sauger
User-agent: Webshag
User-agent: WebsiteExtractor
User-agent: Website\ Extractor
User-agent: WebsiteQuester
User-agent: Website\ Quester
User-agent: Webster
User-agent: WebStripper
User-agent: Web\ Stripper
User-agent: WebSucker
User-agent: Web\ Sucker
User-agent: WebWhacker
User-agent: Web\ Whacker
User-agent: WebZIP
User-agent: WeSEE
User-agent: Whack
User-agent: Whacker
User-agent: Whatweb
User-agent: Widow
User-agent: WinHTTrack
User-agent: WiseGuys\ Robot
User-agent: WISENutbot
User-agent: Wonderbot
User-agent: Woobot
User-agent: Wotbox
User-agent: Wprecon
User-agent: WPScan
User-agent: WWW-Collector-E
User-agent: WWW-Mechanize
User-agent: WWW::Mechanize
User-agent: WWWOFFLE
User-agent: x09Mozilla
User-agent: x22Mozilla
User-agent: Xaldon_WebSpider
User-agent: Xaldon\ WebSpider
User-agent: Xenu
User-agent: YoudaoBot
User-agent: Zade
User-agent: Zermelo
User-agent: Zeus
User-agent: Zgrab
User-agent: Zitebot
User-agent: ZmEu
User-agent: ZumBot
User-agent: ZyBorg
Disallow: /

# Allow Googlebot
User-agent: AhrefsBot
User-agent: AhrefsSiteAudit
User-agent: Alexa Crawler
User-agent: Archive.org_bot
User-agent: AspiegelBot
User-agent: Baiduspider
User-agent: Bingbot
User-agent: Botify
User-agent: Botscraper
User-agent: Catchpoint
User-agent: Cognitiveseo
User-agent: Common Crawl
User-agent: DeepCrawl
User-agent: Diffbot
User-agent: DotBot
User-agent: DotBot
User-agent: DuckDuckBot
User-agent: Exabot
User-agent: Findxbot
User-agent: Gigablast
User-agent: Giraffebot
User-agent: Googlebot
User-agent: LinkdexBot
User-agent: Lipperhey
User-agent: Majestic-12 Bot
User-agent: MojeekBot
User-agent: MozBot
User-agent: NetEstate NE Crawler
User-agent: OnCrawl
User-agent: OpenWebSpider
User-agent: OrangeBot
User-agent: PetalBot
User-agent: PiplBot
User-agent: Qwantify
User-agent: RyteBot
User-agent: Screaming Frog SEO Spider
User-agent: Scrubby
User-agent: SearchmetricsBot
User-agent: SEMrushBot
User-agent: SEOENGBot
User-agent: SEOkicks-Robot
User-agent: SEOkicks
User-agent: SEOlyzer
User-agent: SerendeputyBot
User-agent: SerpstatBot
User-agent: SeznamBot
User-agent: SeznamBot
User-agent: SISTRIX Crawler
User-agent: Sitebulb Crawler
User-agent: Slurp Bot
User-agent: Sogou Spider
User-agent: SpyFuBot
User-agent: StormCrawler
User-agent: TinEye
User-agent: Ubersuggest Bot
User-agent: Veoozbot
User-agent: WebMeUp
User-agent: WorldWideWeb Worm
User-agent: XoviBot
User-agent: YacyBot
User-agent: Yandex Bot
User-agent: ZoomInfoBot
Allow: /

# Block certain bots from specific directories
User-agent: Baiduspider
Disallow: /admin/
Disallow: /private/
Disallow: /api/

User-agent: Yandex
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Delay between successive requests
Crawl-delay: 10

# Sitemap
Sitemap: ${sitemapUrl}

# Host
Host: ${host}
  `.trim();

  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  res.write(robotsTxt);
  res.end();

  return { props: {} };
};

export default RobotsTxt;