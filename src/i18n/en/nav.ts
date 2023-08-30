/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{text: 'Start Here', header: true, type: 'learn', key: 'start-here'},
		{text: 'Getting Started', slug: 'getting-started', key: 'getting-started'},
		{text: 'Data Support Requests', slug: 'support-requests', key: 'support-requests'},

	{text: 'Products', header: true, type: 'learn', key: 'products'},
		{text: 'Customer Health', slug: 'products/customer-health', key: 'products/customer-health'}, 
		{text: 'Product Health', slug: 'products/product-health', key: 'products/product-health'},
		{text: 'Liquidity Management', slug: 'products/liquidity-management', key: 'products/liquidity-management'},
		{text: 'Trust Management', slug: 'products/trust-management', key: 'products/trust-management'},
		{text: 'All Products', slug: 'products', key: 'products'},
	
	{text: 'Business Domains', header: true, type: 'learn', key: 'business-domains'},
		{text: 'Accounts', slug: 'business-domains/accounts', key: 'business-domains/accounts'},
		{text: 'Foreign Exchange', slug: 'business-domains/forex', key: 'business-domains/forex'},
		{text: 'Journals', slug: 'business-domains/journals', key: 'business-domains/journals'},
		{text: 'Ledgers', slug: 'business-domains/ledgers', key: 'business-domains/ledgers'},
		{text: 'Payments', slug: 'business-domains/payments', key: 'business-domains/payments'},
		{text: 'Requests', slug: 'business-domains/requests', key: 'business-domains/requests'},
	
	{text: 'Tableau', header: true, type: 'learn', key: 'tableau'},
		{text: 'Guides', slug: 'tableau/tableau-guides', key: 'tableau/tableau-guides'},
		{text: 'Workbooks', slug: 'tableau-workbooks', key: 'tableau-workbooks'},
	
	{text: 'Databricks', header: true, type: 'learn', key: 'databricks'},
		{text: 'Guides', slug: 'databricks/databricks-guides', key: 'databricks/databricks-guides'},
		{text: 'Queries', slug: 'databricks/databricks-queries', key: 'databricks/databricks-queries'},	

	{text: 'Start Here', header: true, type:'internal',key: 'project-management'},
		{text: 'Getting Started', slug: 'getting-started-architecture', key: 'getting-started-architecture'},
		{text: 'Data Hub', slug: 'data-hub', key: 'data-hub'},
	
	{text: 'Project Management', header: true, type:'internal',key: 'project-management'},
		{text: 'Roadmap', slug: 'project-management/roadmap', key: 'project-management/roadmap'},
		{text: 'Kanban', slug: 'project-management/kanban', key: 'project-management/kanban'}, 
		{text: 'Azure DevOps', slug: 'project-management/azure-dev-ops', key: 'project-management/azure-dev-ops'},
		{text: 'GitHub Actions', slug: 'project-management/github-actions', key: 'project-management/github-actions'},
	
	{text: 'Style Guide', header: true, type:'internal',key: 'style-guide'},
		{text: 'Style Overview', slug: 'style-guide/style-overview', key: 'style-guide/style-overview'},
		{text: 'Git', slug: 'style-guide/git', key: 'style-guide/git'},
		{text: 'Semantic Layer', slug: 'style-guide/semantic-layer', key: 'style-guide/semantic-layer'},
	
	{text: 'Architecture', header: true, type:'internal',key: 'architecture'},
		{text: 'Lakehouse', slug: 'architecture/lakehouse', key: 'architecture/lakehouse'},
		{text: 'Extract Load Transform', slug: 'architecture/elt', key: 'architecture/elt'}, 
		{text: 'Unity Catalog', slug: 'architecture/unity-catalog', key: 'architecture/unity-catalog'},
		{text: 'Semantic Layer', slug: 'architecture/semantic-layer', key: 'architecture/semantic-layer'}, 
		{text: 'Data Quality', slug: 'architecture/data-quality', key: 'architecture/data-quality'},
		{text: 'Data Governance', slug: 'architecture/data-governance', key: 'architecture/data-governance'}
] as const;
