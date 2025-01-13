import CreditTips from "../components/Financing/CreditTips";
import Price from "../components/Financing/HeroFin";
import LoanCalculator from "../components/Financing/LoanCalculator";
import LoanSample from "../components/Financing/LoanSample";

export default function FinancingPage() {
  return (
    <div>
      <Price />
      <LoanCalculator />
      {/* <CalculatorSection /> */}
      <CreditTips />
      <LoanSample />

      {/* <DownloadSection /> */}
    </div>
  );
}
