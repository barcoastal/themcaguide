export interface LawsuitRecord {
  caseName: string;
  lender: string;
  court: string;
  caseNumber?: string;
  filingDate?: string;
  status:
    | "pending"
    | "dismissed"
    | "settled"
    | "judgment"
    | "appeal"
    | "injunction"
    | "consent-decree";
  summary: string;
  sourceUrl: string;
  sourceType:
    | "ny-ag"
    | "ftc"
    | "cfpb"
    | "appellate"
    | "news-investigation"
    | "state-ag";
}

export const lawsuits: LawsuitRecord[] = [
  {
    caseName: "People v. Richmond Capital Group LLC",
    lender: "Richmond Capital Group",
    court: "New York State Supreme Court, New York County",
    caseNumber: "451368/2020",
    filingDate: "2020",
    status: "judgment",
    summary:
      "NY AG Letitia James sued Richmond Capital Group, Ram Capital Funding, and Viceroy Capital Funding for alleged predatory MCA practices including threatening violence against merchants, charging undisclosed fees, debiting excess amounts, and filing false affidavits to obtain confessions of judgment. A preliminary injunction was obtained in 2020. In February 2024 the court entered a $77 million judgment against the companies and their principals.",
    sourceUrl:
      "https://ag.ny.gov/press-release/2024/attorney-general-james-announces-historic-judgment-against-predatory-lender",
    sourceType: "ny-ag",
  },
  {
    caseName: "FTC v. RCG Advances LLC (Jonathan Braun)",
    lender: "RCG Advances / Richmond Capital Group",
    court: "U.S. District Court, Southern District of New York",
    filingDate: "2020",
    status: "judgment",
    summary:
      "The FTC sued RCG Advances LLC (formerly Richmond Capital Group LLC), Ram Capital Funding LLC, and individuals including Jonathan Braun and Robert Giardina, alleging they deceived small businesses through misrepresented MCA terms, made unauthorized bank withdrawals, threatened physical violence, and abused confessions of judgment to seize personal and business assets. Braun received a permanent ban from the MCA and debt collection industries, and a federal court entered a $20.3 million judgment against him in February 2024.",
    sourceUrl:
      "https://www.ftc.gov/news-events/news/press-releases/2024/02/court-enters-203-million-judgment-ftc-case-against-merchant-cash-advance-operator-jonathan-braun",
    sourceType: "ftc",
  },
  {
    caseName: "FTC v. Yellowstone Capital LLC",
    lender: "Yellowstone Capital / Fundry Inc.",
    court: "U.S. District Court, Southern District of New York",
    filingDate: "2018",
    status: "settled",
    summary:
      "The FTC charged Yellowstone Capital, Fundry Inc., and principals Yitzhak (Isaac) Stern and Jeffrey Reece with unauthorized withdrawals from merchants' bank accounts after balances were repaid and deceptive representations about financing amounts and fees. In April 2021 the parties settled for $9,837,000 in refunds to affected businesses, with a permanent prohibition on misleading customers about financing terms.",
    sourceUrl:
      "https://www.ftc.gov/news-events/news/press-releases/2021/04/cash-advance-firm-pay-98m-settle-ftc-complaint-it-overcharged-small-businesses",
    sourceType: "ftc",
  },
  {
    caseName: "FTC v. RAM Capital Funding LLC (Tzvi Reich)",
    lender: "RAM Capital Funding",
    court: "U.S. District Court, Southern District of New York",
    filingDate: "2020",
    status: "consent-decree",
    summary:
      "RAM Capital Funding and its owner Tzvi Reich settled FTC charges in January 2022. The FTC alleged that since 2015 the defendants deceived small businesses by requiring undisclosed personal guarantees and upfront fees, providing less funding than promised, and making unauthorized bank withdrawals — sometimes using threats of physical violence to collect. Under the consent decree, Reich and RAM Capital were permanently banned from the MCA and debt collection industries and ordered to pay $675,000.",
    sourceUrl:
      "https://www.ftc.gov/news-events/news/press-releases/2022/01/merchant-cash-advance-providers-banned-industry-ordered-redress-small-businesses",
    sourceType: "ftc",
  },
  {
    caseName:
      "People of the State of New York v. Yellowstone Capital LLC et al.",
    lender: "Yellowstone Capital",
    court: "New York State Supreme Court",
    filingDate: "2024",
    status: "settled",
    summary:
      "NY AG Letitia James sued Yellowstone Capital CEO Isaac Stern, President Jeffrey Reece, and related entities after an investigation found they exploited small businesses through illegal high-interest MCA loans, operating under dozens of aliases including Fundry, Green Capital Funding, High Speed Capital, and Capital Advance Services. In January 2025 the AG announced a $1 billion settlement providing over $534 million in debt relief and at least $16 million in direct restitution to harmed businesses.",
    sourceUrl:
      "https://ag.ny.gov/press-release/2025/attorney-general-james-announces-1-billion-settlement-predatory-lender",
    sourceType: "ny-ag",
  },
  {
    caseName: "State of New Jersey v. Yellowstone Capital LLC et al.",
    lender: "Yellowstone Capital",
    court: "New Jersey Superior Court",
    filingDate: "2020",
    status: "consent-decree",
    summary:
      "New Jersey AG Gurbir Grewal filed suit against Yellowstone Capital and associated companies alleging violations of the New Jersey Consumer Fraud Act through predatory MCA lending and abusive collection practices targeting small businesses. In December 2022 the NJ Division of Consumer Affairs entered a consent order. The $27.375 million settlement included approximately $21.75 million in forgiven outstanding balances for NJ customers plus $5.625 million to the state for restitution, civil penalties, and fees.",
    sourceUrl:
      "https://www.njoag.gov/ag-grewal-files-suit-against-yellowstone-capital-llc-and-associated-companies-alleging-the-merchant-cash-advance-companies-targeted-small-businesses-with-predatory-lending-and-abusive-collection-pract/",
    sourceType: "state-ag",
  },
  {
    caseName: "Champion Auto Sales, LLC v. Pearl Beta Funding, LLC",
    lender: "Pearl Beta Funding",
    court: "New York Appellate Division, First Department",
    caseNumber: "5995-158692-16",
    filingDate: "2016",
    status: "judgment",
    summary:
      "Landmark NY appellate decision decided March 15, 2018. Champion Auto Sales challenged Pearl Beta Funding's MCA agreement as a usurious loan. The Appellate Division unanimously ruled that a properly structured Purchase and Sale of Future Receivables agreement is not a usurious loan under New York law, providing foundational legal clarity for the MCA industry. The decision established that courts must look to the substance of the agreement — including reconciliation provisions and the absence of absolute repayment obligation — rather than treating all MCA contracts as disguised loans.",
    sourceUrl:
      "https://law.justia.com/cases/new-york/appellate-division-first-department/2018/5995-158692-16.html",
    sourceType: "appellate",
  },
  {
    caseName: "LG Funding, LLC v. United Senior Properties of Olathe, LLC",
    lender: "LG Funding",
    court: "New York Appellate Division, Second Department",
    caseNumber: "2018-09950",
    filingDate: "2018",
    status: "judgment",
    summary:
      "Influential 2020 appellate decision that established the three-factor test New York courts use to determine whether an MCA agreement is a true sale of receivables or a disguised usurious loan. The factors are: (1) whether the agreement has a reconciliation provision; (2) whether the agreement has a finite term; and (3) whether there is any recourse if the merchant declares bankruptcy. The decision has been widely adopted by federal courts and subsequent NY state courts in MCA litigation.",
    sourceUrl:
      "https://law.justia.com/cases/new-york/appellate-division-second-department/2020/2018-09950.html",
    sourceType: "appellate",
  },
  {
    caseName: "Davis v. Richmond Capital Group, LLC",
    lender: "Richmond Capital Group",
    court: "New York Appellate Division, First Department",
    filingDate: "2018",
    status: "appeal",
    summary:
      "Decided May 13, 2021, this case extended MCA legal analysis beyond the LG Funding three-factor test. The First Department held that MCA agreements may constitute usurious loans where reconciliation provisions are discretionary, defendants allegedly refused to permit reconciliation, daily payment rates did not represent good-faith estimates of receivables, and provisions allowed default upon two or three rejected debits. The ruling clarified that courts must look at additional contract terms beyond the basic LG Funding factors.",
    sourceUrl:
      "https://law.justia.com/cases/new-york/appellate-division-first-department/2021/index-no-656346-18-appeal-no-13843n-13843na-case-no-2020-01400n.html",
    sourceType: "appellate",
  },
  {
    caseName:
      "Attorney General James v. Predatory MCA Operation (2024 Large-Scale Action)",
    lender: "Multiple / Undisclosed MCA Operation",
    court: "New York State Supreme Court",
    filingDate: "2024",
    status: "pending",
    summary:
      "In 2024 NY AG Letitia James filed suit against a large-scale predatory lending operation targeting small businesses through merchant cash advances. The complaint alleged illegal ultra-high-interest loans disguised as MCA transactions, consistent with the AG's ongoing enforcement focus on MCA lenders who violate New York's consumer protection and lending laws.",
    sourceUrl:
      "https://ag.ny.gov/press-release/2024/attorney-general-james-sues-large-scale-predatory-lending-operation-targeting",
    sourceType: "ny-ag",
  },
];
