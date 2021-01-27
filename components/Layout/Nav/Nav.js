import { Menu, Typography } from 'antd';
import Link from 'next/link';

const { Title } = Typography;

const Nav = () => (
  <>
    <Title level={2} type="success">
      Forms
    </Title>
    <Menu mode="inline" theme="dark">
      <Menu.Item key="1">
        <Link href="/baa/old-2019">
          <a>Old 2019 version</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/baa/credits-finished">
          <a>BAA Credits Finished #sponsors</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/baa/got-flagged">
          <a>got flagged as BAA #sponsors</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/baa/promo-story">
          <a>Promotional story detected #writers</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link href="/baa/credits-purchased">
          <a>BAA credits-purchased V1</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link href="/baa/story-submitted">
          <a>BAA Story Submitted #sponsors</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link href="/baa/story-rejected">
          <a>BAA Rejected Story</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="8">
        <Link href="/baa/hackernoon-enquiry">
          <a>Hacker Noon Enquiry Form</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="9">
        <Link href="/baa/hackernoon-plagiarism">
          <a>Plagiarism on Hacker Noon</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="10">
        <Link href="/baa/docs-selectlist">
          <a>Select List (Google Form)</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="11">
        <Link href="/baa/company-logo">
          <a>Company Logo</a>
        </Link>
      </Menu.Item>
    </Menu>
  </>
);

export default Nav;
