import PaymentPlanPage from "@/_components/paymentPlansPage"
import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";

export default function Page() {
    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <PaymentPlanPage/>
        </BasePage>
        
    </div>
}