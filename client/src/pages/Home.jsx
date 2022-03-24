import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { Check } from 'tabler-icons-react';
import image from './image.svg';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function Home() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              An <span className={classes.highlight}>easy</span> way to track<br /> your payments
            </Title>
            <Text color="dimmed" mt="md">
              Create lists for bills or anything that you need to pay, then check them off once they are paid.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
              >
              <List.Item>
                <b>FREE</b> – This is 100% free to use
              </List.Item>
              <List.Item>
                <b>Dashboards</b> – You have your own dashboard to stay organized
              </List.Item>
              <List.Item>
                <b>Simple & Easy</b> – Easy and quick registration process so you can start adding items
              </List.Item>
            </List>

            <Group mt={30}>
              <Button 
              radius="xl" 
              size="md" 
              className={classes.control}
              component={Link}
              to={'/register'}
              >
                Get started
              </Button>
              <Button
              variant="default" 
              radius="xl" 
              size="md" 
              className={classes.control}
              component={Link}
              to={'/login'}
              >
                Already a user?
              </Button>
            </Group>
          </div>
          <Image src={image} className={classes.image} />
        </div>
        </Container>
    </div>
  );
}