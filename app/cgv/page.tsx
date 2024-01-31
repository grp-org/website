import Link from "next/link";

export const metadata = {
    title: 'CGV',
    description: 'Conditions générales de vente.'
};
export default function CGV() {
    return <main className="p-4 text-justify flex flex-col items-center">
        <section className="py-16">
            <h1 className="text-3xl text-center font-wide uppercase">Conditions Générales de vente</h1>
        </section>
        <section className="max-w-4xl">
            
            <h2 className="text-md font-wide uppercase mt-4">Article 1. Objet </h2>
            <p>Les présentes conditions de vente visent à définir les relations contractuelles entre Groupe Peyronnet et l’acheteur et les conditions applicables à tout achat effectué par le biais du site internet  <Link className="underline" href="https://peyronnet.group">https://peyronnet.group</Link>. L’acquisition d’un produit à travers le présent site implique une acceptation sans réserve par l’acheteur des présentes conditions de vente dont l’acheteur reconnaît avoir pris connaissance préalablement à sa commande. Avant toute transaction, l’acheteur déclare d’une part que l’achat de produits sur le site  <Link className="underline" href="https://peyronnet.group">https://peyronnet.group</Link> est sans rapport direct avec son activité professionnelle et est limité à une utilisation strictement personnelle et d’autre part avoir la pleine capacité juridique, lui permettant de s’engager au titre des présentes conditions générales de ventes. </p>
            <p>La société Groupe Peyronnet conserve la possibilité de modifier à tout moment ces conditions de ventes, afin de respecter toute nouvelle réglementation ou dans le but d'améliorer l’utilisation de son site. De ce fait, les conditions applicables seront celles en vigueur à la date de la commande par l’acheteur.</p>
            <h2 className="text-md font-wide uppercase mt-4">Article 2. Produits </h2>
            <p>Les produits proposés sont ceux qui figurent sur le site  <Link className="underline" href="https://peyronnet.group">https://peyronnet.group</Link> de la société Groupe Peyronnet, dans la limite des stocks disponibles. La société Groupe Peyronnet se réserve le droit de modifier à tout moment l’assortiment de produits. Chaque produit est présenté sur le site internet sous forme d’un descriptif reprenant ses principales caractéristiques techniques (contenance, utilisation, composition…). Les photographies sont les plus fidèles possibles mais n’engagent en rien le Vendeur. La vente des produits présentés dans le site  <Link className="underline" href="https://peyronnet.group">https://peyronnet.group</Link> est destinée à tous les acheteurs résidants dans les pays qui autorisent pleinement l’entrée sur leur territoire de ces produits. </p>
            <h2 className="text-md font-wide uppercase mt-4">Article 3. Tarifs </h2>
            <p>
                Les prix figurant sur les fiches produits du catalogue internet et sont des prix en Euros (€) hors taxe (HT) qui ne tiennent pas compte de la TVA applicable au jour de la commande. Tout changement du taux de la TVA pourra être répercuté sur le prix des produits. La société Groupe Peyronnet se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant au catalogue le jour de la commande sera le seul applicable à l’acheteur. Les prix indiqués ne comprennent pas les frais de livraison, facturés en supplément du prix des produits achetés suivant le montant total de la commande.

            </p>
            <h2 className="text-md font-wide uppercase mt-4">Article 4. Commande et modalités de paiement </h2>
            <p>
                Avant toute commande, l’acheteur doit créer un compte sur le site <Link className="underline" href="https://account.peyronnet.group">https://account.peyronnet.group</Link>. La rubrique de création de compte est accessible directement depuis la barre de menu. A chaque visite, l’acheteur, s’il souhaite commander ou consulter son compte (abonnements, profil…), devra s’identifier à l’aide de ces informations. La société Groupe Peyronnet propose à l’acheteur de commander et régler ses produits par le biais de la plateforme Stripe avec laquelle elle collabore.

            </p>
            <p>
                La confirmation d’une commande entraîne acceptation des présentes conditions de vente, la reconnaissance d’en avoir parfaite connaissance et la renonciation à se prévaloir de ses propres conditions d’achat. L’ensemble des données fournies et la confirmation enregistrée vaudront preuve de la transaction. Si l’acheteur possède une adresse électronique et s’il l’a renseignée sur son bon de commande, la société Groupe Peyronnet lui communiquera par courrier électronique la confirmation de l’enregistrement de sa commande.
            </p>
            <p>
                Si l’acheteur souhaite contacter la société Groupe Peyronnet, il peut le faire par email à l’adresse suivante :  <Link className="underline" href="mailto:peyronnet-group@outlook.com">peyronnet-group@outlook.com</Link>.
            </p>
            <h2 className="text-md font-wide uppercase mt-4">Article 5. Réserve de propriété </h2>
            <p>
                La société Groupe Peyronnet conserve la propriété pleine et entière des produits vendus jusqu'au parfait encaissement du prix, en principal, frais et taxes compris.
            </p>
            <h2 className="text-md font-wide uppercase mt-4">Article 6. Rétractation </h2>
            <p>
                En vertu de l’article L121-20 du Code de la consommation, l’acheteur dispose d'un délai de quatorze jours ouvrables à compter de la livraison de leur commande pour exercer son droit de rétractation et ainsi faire retour du produit au vendeur pour échange ou remboursement sans pénalité, à l’exception des frais de retour.
            </p>

            <h2 className="text-md font-wide uppercase mt-4">Article 7. Responsabilité </h2>
            <p>La société Groupe Peyronnet, dans le processus de vente à distance, n’est tenue que par une obligation de moyens. Sa responsabilité ne pourra être engagée pour un dommage résultant de l’utilisation du réseau Internet tel que perte de données, intrusion, virus, rupture du service, ou autres problèmes involontaires.</p>
            <h2 className="text-md font-wide uppercase mt-4">Article 8. Données à caractère personnel</h2>
            <p>
                La société Groupe Peyronnet s'engage à préserver la confidentialité des informations fournies par l’acheteur, qu'il serait amené à transmettre pour l'utilisation de certains services. Toute information le concernant est soumise aux dispositions de la loi n° 78-17 du 6 janvier 1978. A ce titre, l'internaute dispose d'un droit d'accès, de modification et de suppression des informations le concernant. Il peut en faire la demande à tout moment par email à l’adresse suivante :  <Link className="underline" href="mailto:peyronnet-group@outlook.com">peyronnet-group@outlook.com</Link>.

            </p>
        </section>
    </main>
}