import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
} from '@mantine/core';
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

export function Landing() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <Title className={classes.title}>
          DID YOU PAY IT?
        </Title>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              An <span className={classes.highlight}>easy</span> way to track<br /> your payments
            </Title>
            <Text color="dimmed" mt="md">
              Create lists for bills or anything that you need to pay, then check them off once they are paid.
            </Text>

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
          <Image src='favicon.ico' className={classes.image} />
        </div>
        </Container>
    </div>
  );
}