import SidebarLayout from '../components/layouts/SidebarLayout';

const About = () => {
  return <div>About</div>;
};

About.getLayout = page => <SidebarLayout>{page}</SidebarLayout>;

export default About;
