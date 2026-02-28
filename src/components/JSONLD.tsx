// Typescript:
import type { Thing, WithContext } from 'schema-dts'

interface JSONLDProps<T extends Thing> {
  data: WithContext<T>
}

// Functions:
const JSONLD = <T extends Thing>({ data }: JSONLDProps<T>) => (
  <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
)

// Exports:
export default JSONLD
