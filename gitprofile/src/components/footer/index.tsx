import { skeleton } from '../../utils';

const Footer = ({
  content,
  loading,
}: {
  content: string | null;
  loading: boolean;
}) => {
  if (!content) return null;

  const currentYear = new Date().getFullYear();
  const copyright = `&copy; ${currentYear} .`;

  // Append the copyright to the content if content exists.
  const updatedContent = content ? `${content} <br> ${copyright}`: copyright;

  return (
    <div className="card-body">
      {loading ? (
        skeleton({ widthCls: 'w-52', heightCls: 'h-6' })
      ) : (
        <div dangerouslySetInnerHTML={{ __html: updatedContent }} />
      )}
    </div>
  );
};

export default Footer;