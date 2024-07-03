import PaymentPlanPage from "@/_components/paymentPlansPage"
import BasePage from "@/_components/basepage";
import NavbarWrapper from "@/_components/navbar";
import Footer from "@/_components/footer"

export default function Page() {
    return <div>
        <NavbarWrapper></NavbarWrapper>
        <BasePage>
            <PaymentPlanPage/>
        </BasePage>
        
    </div>
}