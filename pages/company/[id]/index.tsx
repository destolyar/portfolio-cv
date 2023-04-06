import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import companies from '../../../companies.json'
import { CompanyPage } from "../../../components/CompanyPage/CompanyPage"
import { CompanyInterface } from "../../../utils/interfaces";

const CompanyPageLayout = () => {
    const [company, setCompany] = useState<CompanyInterface | undefined>()
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query
            const company = companies.find(company => company.id === id)
            setCompany(company)
        }
    }, [router.isReady])

    return (
        company && <CompanyPage company={company}>
            {company.date}
        </CompanyPage>
    )
}

export default CompanyPageLayout