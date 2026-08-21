import PageContainer from '@/components/layout/PageContainer'
import Button from '@/components/ui/Button'
import { useDocumentMeta } from '@/lib/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta('Page Not Found | Emeritus Foods & Commodities')

  return (
    <PageContainer className="py-28 md:py-40 text-center">
      <p className="eyebrow justify-center">404</p>
      <h1 className="mt-4 font-normal text-4xl sm:text-5xl text-deep">Page Not Found</h1>
      <p className="mt-4 text-muted max-w-md mx-auto leading-relaxed">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <div className="mt-8 flex justify-center">
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </PageContainer>
  )
}
